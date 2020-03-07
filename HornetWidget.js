//Greetings! This is slightly less awful code. All credit for the injectCode function goes to a Z man on discord.
function injectCode(
    func,
    source,
    target,
    where
) {
    let newFuncStr = func.toString()
    const sliceMode = source === null
    let regex
    if (!sliceMode) {
        regex = new RegExp(escapeRegExp(source), "g")
    }
    const findStart = /\)\s+{/
    if (!sliceMode && !regex.test(newFuncStr)) console.warn("Nothing to inject.")
    switch (where) {
        case "before":
            if (sliceMode) newFuncStr = newFuncStr.replace(findStart, `) {${target}`)
            else newFuncStr = newFuncStr.replace(regex, `${target}${source}`)
            break
        case "replace":
            if (sliceMode) newFuncStr = `${target}`
            else newFuncStr = newFuncStr.replace(regex, `${target}`)
            break
        case "after":
            if (sliceMode) throw new Error("Yikes, can't add to end!")
            else newFuncStr = newFuncStr.replace(regex, `${source}${target}`)
            break
        default:
            throw new Error('re Parameter must be "before", "replace" or "after"')
    }
    const newFunc = new Function(`return (${newFuncStr})`)()
    newFunc.prototype = func.prototype
    return newFunc
}

Game.ObjectsById[2].minigame.toolsById[0].descFunc = injectCode(Game.ObjectsById[2].minigame.toolsById[0].descFunc, `str+='<div class="line"></div>';`, `if (Game.ObjectsById[2].minigame.convertTimes > 0)  str+='<div>You have sacrificed your garden to the hornets <span style="color:white">' + Beautify(Game.ObjectsById[2].minigame.convertTimes) + \`</span> time\$\{Game.ObjectsById[2].minigame.convertTimes == 1 ? "" : "s" \}.</div>\` ;`, "before");
