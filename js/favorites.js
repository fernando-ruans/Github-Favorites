// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }


load() {
    this.entries = [
        {
        login: 'fernando-ruans',
        name: "Fernando Ruan",
        public_repos: '0',
        folowers: '0'
        },
        {
            login: 'gslogger',
            name: "Gabriela Rocha",
            public_repos: '0',
            folowers: '0'
        }
    ]    
    }
}

// classe que vai criar a visualização e eventos do HTML

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()        
       
        this.entries.forEach(user => {
            const row = this.createRow()
        
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.folowers


        this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
           <img src="https://github.com/fernando-ruans.png" alt="Github user image">
           <a href="https://github.com/fernando-ruans" target="_blank">
            <p>Fernando Ruan</p>
            <span>fernando-ruans</span>
           </a>
        </td>
        <td class="repositories">
            0
        </td>
        <td class="followers">
            0
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>         
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}