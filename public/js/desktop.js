var svg = d3.select('svg')
var zoomWrapper = d3.select('#zoom-wrapper')
var backgroundDarkness = d3.select('#background-darkness')

var MAP_TOOLBAR_WIDTH = 220
var MAP_TOOLBAR_HEIGHT = 303

var selectedEl = null
var regionClicked = false

var selectedItemID, selectedItemIdx
var groups = []
var selectedLandEl = null

// const colors = ['#FFD348', '#C900FC', '#003AFC', '#1BFF00', '#B2B2B2', '#82634D'];
var colors = ['#FF860B', '#FED248', '#c900fc', '#003afc', '#42fc00']

function createRect(id, idx, group, x, y, w, h, meta, tokenId) {
  if (
    id &&
    (idx || idx === 0) &&
    (x || x === 0) &&
    (y || y === 0) &&
    (w || w === 0) &&
    (h || h === 0)
  ) {
    const rect = zoomWrapper.append('rect')
    rect
      .attr('id', id)
      .attr('data-item-idx', idx)
      .attr('tokenId', tokenId)
      .attr('class', 'item ' + group.name)
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr('fill', group.color)
      .attr('stroke', '#fff')

    if (meta !== '') {
      rect.attr('transform', meta)
    }

    return rect
  }
}

function createPolygon(id, idx, group, p, tokenId) {
  const polygon = zoomWrapper.append('polygon')

  polygon
    .attr('id', id)
    .attr('data-item-idx', idx)
    .attr('tokenId', tokenId)
    .attr('class', 'item ' + group.name)
    .attr('fill', group.color)
    .attr('stroke', group.stroke)
    .attr('points', p.split('$').join(','))

  return polygon
}

fetch('/data/map.csv')
  .then(response => response.text())
  .then(text => {
    // ------------------------------------------------
    // Parse CSV data

    var result = []
    const lines = text
      .split('\r')
      .join('')
      .split('\n')

    const headers = lines[0].split(',')
    for (let i = 1; i < lines.length; i++) {
      const obj = {}
      const current = lines[i].split(',')
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = current[j]
      }

      const tInfo = current[0].split('_')

      result.push({
        tokenId: tInfo[tInfo.length - 1],
        ...obj
      })
    }

    const itemsData = result

    // ------------------------------------------------
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

    const landTooltipEl = document.querySelector('#new-land-tooltip')
    const landTooltipLandEl = document.querySelector('#new-land-tooltip__land')

    //-----------------------------------------------
    // parse query
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    const selectedLandId = (params && params.landId) || null

    // ------------------------------------------------
    // Create items

    const items = []
    itemsData.forEach((d, i) => {
      const group = groups.find(g => g.name === d.group2)
      if (`${d.tokenId}` === `${selectedLandId}`) {
        selectedLandEl = d.id
      }

      if (!d.metadata || (d.metadata && d.metadata.indexOf('matrix') !== -1)) {
        items.push(
          createRect(
            d.id,
            i,
            group,
            d.x,
            d.y,
            d.width,
            d.height,
            d.metadata,
            d.tokenId
          )
        )
      } else {
        items.push(createPolygon(d.id, i, group, d.metadata, d.tokenId))
      }
      // items.push(
      //     createRect(d.id, i, group, d.x, d.y, d.width, d.height, d.angle)
      // );
    })
    localStorage.setItem('groups', JSON.stringify(groups))
    createGroupsSection(itemsData, groups)

    // ------------------------------------------------
    // Item selection

    function updateItemSelection(item) {
      /*console.log('DEBUG-item', { item })*/
      deselectItems()
      const selected = d3.select(item)
      selected.classed('selected', true)
      selectedItemID = item.getAttribute('id')
      selectedItemIdx = item.getAttribute('data-item-idx')

      localStorage.setItem('tid', item.getAttribute('tokenId'))
    }
    function deselectItems() {
      zoomWrapper.select('.selected').classed('selected', false)
      selectedItemID = null
      selectedItemIdx = null
      localStorage.removeItem('tid')
      d3.select('#background').style("filter", "none");
      zoomWrapper.selectAll('.item').style("stroke-width", "1px").style("opacity", 1);
    }

    const showTooltip = (el, opacity) => {
      // Positioning tooltip
      const pos = d3
        .select(el)
        .node()
        .getBoundingClientRect()

      let left = pos.left
      let top = pos.top

      // Classnames
      const classname = el.getAttribute('class')

      if (classname.includes('disabled')) {
        left = left - MAP_TOOLBAR_WIDTH / 2 + pos.width / 2
        top = top - MAP_TOOLBAR_HEIGHT

        landTooltipEl.style.left = `${left}px`
        landTooltipEl.style.top = `${top}px`

        landTooltipLandEl.innerHTML = el.id

        landTooltipEl.style.opacity = opacity
        landTooltipEl.style.display = 'block'

        return
      }
      left = left - MAP_TOOLBAR_WIDTH / 2 + pos.width / 2
      top = top - MAP_TOOLBAR_HEIGHT

      landTooltipEl.style.left = `${left}px`
      landTooltipEl.style.top = `${top}px`

      const ttClassnames = (landTooltipEl.getAttribute('class') || '').split(
        ' '
      )
      if (ttClassnames.includes('disabled')) {
        const dIndex = ttClassnames.indexOf('disabled')
        ttClassnames.splice(dIndex, 1)
      }

      landTooltipEl.setAttribute('class', ttClassnames.join(' '))

      //landTooltipLandEl.innerHTML = el.id

      landTooltipEl.style.opacity = opacity
      landTooltipEl.style.display = 'block'
    }

    const hideTooltip = () => {
      // console.log('Debug-hiding');

      if (selectedEl) {
        const classnames = (selectedEl.getAttribute('class') || '').split(' ')
        if (classnames.includes('selected')) {
          const index = classnames.indexOf('selected')
          classnames.splice(index, 1)
        }

        selectedEl.setAttribute('class', classnames.join(' '))
      }

      //landTooltipLandEl.innerHTML = ''
      landTooltipEl.style.display = 'none'

      regionClicked = false
    }

    // ------------------------------------------------
    // Zooming

    // Create zooming instance

    const svgCenter = [2750, 2750]
    const zoomingDuration = 600,
      zoomBound = [1, 50]

    const zoom = d3
      .zoom()
      .extent([
        [0, 0],
        [5500, 7500]
      ])
      .scaleExtent(zoomBound)
      .on('zoom', zoomed)
      .on('end', () => {
        hideTooltip()
      })

    function zoomed({ transform }) {
      zoomTransformData = transform
      zoomWrapper.attr('transform', zoomTransformData)
      backgroundDarkness.attr('opacity', zoomTransformData.k / zoomBound[1])
    }

    var zoomTransformData = d3.zoomTransform(svg)

    // Call zooming
    svg.call(zoom)

    d3.select('#backUrl').on('click', function() {
        zoom.scaleBy(svg.transition().duration(zoomingDuration), 0.3)
        deselectItems();
    });

    zoomWrapper.selectAll('.item').on('click', function() {
      selectedEl = this
      regionClicked = true

        updateItemSelection(this)
        zoomWrapper.selectAll('.item')
            .style("stroke-width", "1px")
            .style("opacity", 0.5)

        d3.select('#background').style("filter", "grayscale(1)")

        d3.select(selectedEl)
            .style("stroke-width", "3px")
            .style("opacity", 1)

      const tokenId = this.getAttribute('tokenId')

      const newUrl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        `?landId=${tokenId}`

      window.history.pushState({ path: newUrl }, '', newUrl)

      document.getElementById('drawerOpenIcon').click();
      zoomToNode(this)
    })

    zoomWrapper.selectAll('.item').on('mouseover', function() {
      !regionClicked && showTooltip(this, 1)
    })

    zoomWrapper.selectAll('.item').on('mouseleave', function() {
      // console.log('DEBUG-regionClicked', { regionClicked });

      !regionClicked && hideTooltip()
    })

    zoomWrapper.selectAll('.district').on('click', function() {
      deselectItems()
      zoomToNode(this)
    })

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

    function zoomToNode(el, predefinedZoom = 10, check = null) {
      const box = el.getBBox()
      const itemSize = Math.max(box.width, box.height)
      const scale = Math.min(zoomBound[1], 5500 / itemSize)
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
          // d3.pointer(el, svg.node())
        )

      if (check === null) {
        localStorage.setItem('clicknode', true)
      }

      setTimeout(() => {
        showTooltip(el, 1)

        selectedEl = el
        regionClicked = true
      }, duration + 100)
    }
    const zoomInBtn = document.querySelector('#zoom-in-btn')
    const zoomOutBtn = document.querySelector('#zoom-out-btn')
    const zoomResetBtn = document.querySelector('#zoom-reset-btn')
    const nftmap = document.querySelector('#map')
    const fullmap = document.querySelector('.full-map')
    if (nftmap) {
      nftmap.addEventListener('wheel', function(event) {
        event.preventDefault()
      })
    }
    if (fullmap) {
      fullmap.addEventListener('wheel', function(event) {
        event.preventDefault()
      })
    }
    //zoomInBtn.onclick = zoomInAction();
    zoom.scaleBy(svg.transition().duration(zoomingDuration), 3)

    if(zoomInBtn){
      zoomInBtn.onclick = () => {
        zoomInAction()
      }
      zoomOutBtn.onclick = function() {
        if (itemsData[selectedItemIdx]) {
          const el = document.querySelector('#' + itemsData[selectedItemIdx].id)
          zoomToNode(el, zoomTransformData.k * 0.5, false)
        } else {
          zoom.scaleBy(svg.transition().duration(zoomingDuration), 0.3)
        }
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

        deselectItems()
        //showClickedItemInfo();
      }
    }

    function zoomInAction(event) {
      if (itemsData[selectedItemIdx]) {
        const el = document.querySelector('#' + itemsData[selectedItemIdx].id)
        zoomToNode(el, zoomTransformData.k * 2, false)
      } else {
        zoom.scaleBy(svg.transition().duration(zoomingDuration), 2)
      }
    }

    // ------------------------------------------------
    // Auto zoom to the item from URL
    const selectLandById = id => {
      const selected = zoomWrapper.select('#' + id).node()
      updateItemSelection(selected)
      zoomToNode(selected)
    }

    const getParameterByName = (name, url) => {
      // eslint-disable-next-line no-useless-escape
      name = name.replace(/[\[\]]/g, '\\$&')
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)

      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }

    // -----------------------------------
    if (selectedLandEl) {
      const selected = document.getElementById(selectedLandEl)

      updateItemSelection(selected)
      zoomToNode(selected)
    }

    // (function (history) {
    //   const pushState = history.pushState;
    //   history.pushState = function (state, ...args) {
    //     if (args && args.length > 1) {
    //       const landId = getParameterByName('landId', args[1]);
    //       landId && selectLandById(landId);
    //     }

    //     pushState.call(history, state, ...args);
    //   };
    // })(window.history);
  })
