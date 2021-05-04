import { PluginEvent, PluginMeta } from '@posthog/plugin-scaffold'

export function setupPlugin({ config, global }: PluginMeta) {

    const percentage = parseFloat(config.percentage)
    if ( isNaN(percentage) || percentage > 100 || percentage < 0) {
        throw new Error('Percentage must be a number between 0 and 100.')
    }
    global.percentage = percentage
}

// /* Runs on every event */
export function processEvent(event: PluginEvent, { global }: PluginMeta) {

    if (Math.random() < global.percentage / 100) {
        return event
    }
    return null
}
