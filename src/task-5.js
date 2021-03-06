import boundingRect from './task-3'
import runRover from './task-4'

function getExpeditionsTargets(commandSeries) {
  return commandSeries.map(el => runRover(el))
}

export default function boundingRover(commandSeries) {
  return boundingRect(getExpeditionsTargets(commandSeries))
}
