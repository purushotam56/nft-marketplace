var svg = d3.select('svg')
var zoomWrapper = d3.select('#zoom-wrapper')
var zoomPrevFocus = d3.selectAll('.map-preview-focus')

var selectedItemID, selectedItemIdx
var groups = []

var colors = [
  '#FFD348',
  '#C900FC',
  '#003AFC',
  '#1BFF00',
  '#B2B2B2',
  '#82634D'
]

fetch('/data/map.csv')
  .then(response => response.text())
  .then(text => {
    // Parse CSV data

    const lines = text.split('\n')
    for (let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].replace(/\s/, '')
    }
    let result = []
    const headers = lines[0].split(',')
    for (let i = 1; i < lines.length; i++) {
      let obj = {}
      let current = lines[i].split(',')
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = current[j]
      }
      result.push(obj)
    }
    let itemsData = result

    // Get groups info (needs to be changed once I have colors in CSV)

    const groupNames = itemsData
      .map(d => d.group2)
      .filter((v, idx, self) => self.indexOf(v) === idx)
    groupNames.forEach((gn, gnIdx) => {
      if (gn) {
        groups.push({
          name: gn,
          color: colors[gnIdx],
          visible: true
        })
      }
    })

    itemsData.forEach(d => {
      d.group = groups.find(g => g.name === d.group2)
    })

    const zoomBound = [1, 100]
    const svgCenter = [2500, 2500]
    const zoomingDuration = 500

    let zoomTransformData = d3.zoomTransform(svg)

    const zoom = d3
      .zoom()
      .extent([
        [0, 0],
        [5000, 5000]
      ])
      .scaleExtent(zoomBound)
      .on('zoom', zoomed)

    function zoomed({ transform }) {
      zoomTransformData = transform
      zoomWrapper.attr('transform', zoomTransformData)

      const x = 5000 - (5000 + zoomTransformData.x / zoomTransformData.k)
      const y = 5000 - (5000 + zoomTransformData.y / zoomTransformData.k)
      const size = 5000 / zoomTransformData.k
      zoomPrevFocus.attr('x', x)
      zoomPrevFocus.attr('y', y)
      zoomPrevFocus.attr('width', size)
      zoomPrevFocus.attr('height', size)
    }

    svg.call(zoom)

    var zoomTimer,
      itWasTap = false
    zoom.on('start', () => {
      document.querySelector('.first-check-vector').style.visibility = 'visible'
      document.querySelector('.second-check-vector').style.visibility =
        'visible'
      document.querySelector('.third-check-vector').style.visibility = 'visible'
      document.querySelector('.fourth-check-vector').style.visibility =
        'visible'
      document.querySelector('.fifth-check-vector').style.visibility = 'visible'
      itWasTap = true
      /*zoomTimer = d3.timer((elapsed) => {
                if (elapsed > 100) {
                    itWasTap = false;
                    zoomTimer.stop();
                }
            });
            */
    })
    zoom.on('end', () => {
      if (zoomTransformData.k > 6) {
        const x = 5000 - (5000 + zoomTransformData.x / zoomTransformData.k)
        const y = 5000 - (5000 + zoomTransformData.y / zoomTransformData.k)
        const size = 5000 / zoomTransformData.k

        //clearGroupsSection();
        zoomWrapper.selectAll('.item').remove()
        itemsData.forEach((d, i) => {
          if (d.x > x && d.x < x + size && d.y > y && d.y < y + size) {
            createRect(
              d.id,
              i,
              d.group,
              d.x,
              d.y,
              d.width,
              d.height,
              d.angle
            ).on('mousemove', function(event) {
              zoomToNode(this)
              selectedItemID = this.getAttribute('id')
              selectedItemIdx = this.getAttribute('data-item-idx')
            })
          }
        })
        createGroupsSection(itemsData, groups)

        const selected = d3.select('#' + selectedItemID)
        selected.classed('selected', true)
      } else {
        zoomWrapper.selectAll('.item').remove()
        //clearGroupsSection();
      }
    })

    const zoomInBtn = document.querySelector('#zoom-in-btn')
    const zoomOutBtn = document.querySelector('#zoom-out-btn')
    const zoomResetBtn = document.querySelector('#zoom-reset-btn')
    zoomInBtn.onclick = function() {
      zoom.scaleBy(svg.transition().duration(zoomingDuration), 2)
    }
    zoomOutBtn.onclick = function() {
      zoom.scaleBy(svg.transition().duration(zoomingDuration), 0.3)
    }
    zoomResetBtn.onclick = function() {
      svg
        .transition()
        .duration(zoomingDuration)
        .call(
          zoom.transform,
          d3.zoomIdentity,
          d3.zoomTransform(svg.node()).invert(svgCenter)
        )

      zoomWrapper.select('.selected').classed('selected', false)
      selectedItemID = null
      selectedItemIdx = null
      //showClickedItemInfo();
    }

    function createRect(id, idx, group, x, y, w, h, a) {
      if (
        id &&
        (idx || idx === 0) &&
        (x || x === 0) &&
        (y || y === 0) &&
        (w || w === 0) &&
        (h || h === 0) &&
        (a || a === 0)
      ) {
        const rect = zoomWrapper.append('rect')
        rect
          .attr('id', id)
          .attr('data-item-idx', idx)
          .attr('class', 'item ' + group.name)
          .attr('x', x)
          .attr('y', y)
          .attr('width', w)
          .attr('height', h)
          .attr('transform', 'rotate(' + -a + ', ' + x + ', ' + y + ')')
          .attr('fill', group.color)
          .attr('stroke-width', '2')
          .attr('stroke', 'black')
          .on('touchend', function() {
            if (itWasTap) {
              //zoomToNode(this)
              //showClickedItemInfo(this);
              //selectedItemID = this.getAttribute('id');
              //selectedItemIdx = this.getAttribute('data-item-idx');
            }
          })
        return rect
      }
    }

    function createGroupsSection(items, groups) {
      const checkBox1 = document.querySelector('#checkbox-1')
      const checkBox2 = document.querySelector('#checkbox-2')
      const checkBox3 = document.querySelector('#checkbox-3')
      const checkBox4 = document.querySelector('#checkbox-4')
      const checkBox5 = document.querySelector('#checkbox-5')
      if (
        checkBox1 != null ||
        checkBox2 != null ||
        checkBox3 != null ||
        checkBox4 != null ||
        checkBox5 != null
      ) {
        groups.forEach(g => {
          if (g.name == checkBox1.value) {
            const itemsOfG = zoomWrapper.selectAll('.' + g.name)
            checkBox1.addEventListener('click', function() {
              itemsOfG.attr('opacity', g.visible ? '0' : '1')
              g.visible = !g.visible
            })
          } else if (g.name == checkBox2.value) {
            const itemsOfG = zoomWrapper.selectAll('.' + g.name)
            checkBox2.addEventListener('click', function() {
              itemsOfG.attr('opacity', g.visible ? '0' : '1')
              g.visible = !g.visible
            })
          } else if (g.name == checkBox3.value) {
            const itemsOfG = zoomWrapper.selectAll('.' + g.name)
            checkBox3.addEventListener('click', function() {
              itemsOfG.attr('opacity', g.visible ? '0' : '1')
              g.visible = !g.visible
            })
          } else if (g.name == checkBox4.value) {
            const itemsOfG = zoomWrapper.selectAll('.' + g.name)
            checkBox4.addEventListener('click', function() {
              itemsOfG.attr('opacity', g.visible ? '0' : '1')
              g.visible = !g.visible
            })
          } else if (g.name == checkBox5.value) {
            const itemsOfG = zoomWrapper.selectAll('.' + g.name)
            checkBox5.addEventListener('click', function() {
              itemsOfG.attr('opacity', g.visible ? '0' : '1')
              g.visible = !g.visible
            })
          }
        })
      }
    }

    // ------------------------------------------------
    // Auto zoom to the item from URL

    function zoomToNode(el, predefinedZoom = null, attribute) {
      const box = el.getBBox()
      const itemSize = Math.max(box.width, box.height)
      const scale = Math.min(zoomBound[1], 5000 / itemSize)
      const duration =
        Math.abs(scale / zoomTransformData.k) > 7
          ? zoomingDuration * 2
          : zoomingDuration
      svg
        .transition()
        .duration(duration)
        .call(
          zoom.transform,
          d3.zoomIdentity
            .translate(svgCenter[0], svgCenter[1])
            .scale(predefinedZoom ? predefinedZoom : scale)
            .translate(
              -(box.x + box.x + box.width) / 2,
              -(box.y + box.y + box.height) / 2
            )
        )
      localStorage.setItem('clicknode', true)
    }

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const parsedID = urlParams.get('id')

    if (parsedID) {
      const item = itemsData.find(d => d.id === parsedID)
      const selected = createRect(
        item.id,
        0,
        item.group,
        item.x,
        item.y,
        item.width,
        item.height,
        item.angle
      )
      showClickedItemInfo(selected)
      selected.classed('selected', true)
      selectedItemID = selected.attr('id')
      selectedItemIdx = selected.attr('data-item-idx')
      zoomToNode(selected.node(), 12)
    }
  })
