const {statSync, readdirSync, readFileSync} = require("fs")

const argument = new RegExp(process.argv[2])

for (let arg of process.argv.slice(3)) {
    search(arg)
}

function search(file) {
    let stats = statSync(file)
    if (stats.isDirectory()) {
        for (let f of readdirSync(file)) {
            search(file + "/" + f)
        }
    } else if (argument.test(readFileSync(file, "utf-8"))) {
        console.log(file)
    }
}
