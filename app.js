const model = {
  append: (target) => {
    $(target).append('<div class="die">0</div>')
  }
}

const view = {
  wat: () => {
    console.log("WAT");
  }
}

const controller = {
  printWat: (select) => {
    $(select).click(() => {
      view.wat()
    })
  },
  addDice: (select, target) => {
    $(select).click(() => {
      model.append(target)
    })
  },
  random: () => {
    return Math.floor((Math.random()*6)+1)
  },
  dieLoop: (dies) => {
    $(dies).each((k, die) => {
      $(die).text(controller.random())
    })
  },
  rollDice: (select, input) => {
    $(select).click(() => {
      controller.dieLoop(input)
    })
  }
}
