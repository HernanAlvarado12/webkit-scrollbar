import { json } from "./json.js"

const fragment = document.createDocumentFragment()
const mainContainer = document.querySelector('.main__cntnr')
/**
 * @type {Element}
 */
const template = document.getElementById('dashTemplate').content
const colors = ['--red-soft', '--blue-soft', '--red-light', '--green', '--violet', '--orange']
const paths = ['./assets/work.svg','./assets/play.svg','./assets/study.svg','./assets/exercise.svg','./assets/social.svg','./assets/self-care.svg']

json.forEach(json => fragment.append(createTemplate(json)))
mainContainer.append(fragment)

/**
 * 
 * @param {JSON} json 
 * @returns {Element}
 */
function createTemplate(json) {
    const cloneNode = document.importNode(template, true)
    const color = getComputedStyle(document.documentElement).getPropertyValue(colors.shift())
    cloneNode.querySelector('.article__back').style = `background-image: url(${paths.shift()}); background-color: ${color}`
    cloneNode.querySelector('.dash__ttl').textContent = json.title
    cloneNode.querySelector('.dash__hours').textContent = `${json.timeframes.weekly.current} hours`
    cloneNode.querySelector('.dash__date').textContent = `Last week - ${json.timeframes.weekly.previous}hours`
    return cloneNode
}

