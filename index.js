const persons= [
    {name: 'Farhanah',
     age: 29,
     img: './images/gema-saputera-KJY3WftLWeg-unsplash.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'girl'
    },
    {name: 'Ayisha',
     age: 28,
     img: './images/aysha.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'girl'
    },
    {name: 'Abdul Khader',
     age: 30,
     img: './images/abdul-kader.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Hamdan',
     age: 25,
     img: './images/hamdan.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'abdul Jawad',
     age: 27,
     img: './images/abdul-jawad.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Abdul Basith',
     age: 35,
     img: './images/abdul-basith.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Sameer',
     age: 38,
     img: './images/sammer.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Sumayya',
     age: 39,
     img: './images/sumayya.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'girl'
    },
    {name: 'Salim',
     age: 32,
     img: './images/salim.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Ibrahim kaleel',
     age: 21,
     img: './images/kaleel.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Imran',
     age: 16,
     img: './images/imran.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'boy'
    },
    {name: 'Mohammed',
     age: 68,
     img: './images/imran.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'father'
    },
    {name: 'Fathimathul Zuhra',
     age: 57,
     img: './images/imran.jpg',
     text: 'loorem lorem ahduehf hbduhfiuhrkn bsaujdhwn jhajndi3',
     category: 'mother'
    },
];

//get parent Element


const sectionCenter= document.querySelector('.section-center')
const filterBtnContainer= document.querySelector('.btn-container')

//on window load

window.addEventListener('DOMContentLoaded', () => {
    displayNames(persons)
    displayCategory()
})

function displayNames(person){
    let displayName = person.map((each)=>{
        return ` <article class="person">
        <img src=${each.img} class="photo"alt="person-1">
        <div class="person-info">
            <header>
                <h4>${each.name}</h4>
                <h4>${each.age}</h4>
            </header>
            <p class="person-text">
                ${each.text}
            </p>
        </div>
      </article>`  
     })
       displayName= displayName.join('')
       sectionCenter.innerHTML= displayName 
}

function displayCategory(){

     //getting all the unique categories

     const categories= persons.reduce((value,item)=>{
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value
    },['all'])
    // console.log(categories)
    const categoryBtns= categories.map((each)=>{
        return `<button class="filter-btn" type="button" data-id=${each}>${each}</button>`
    }).join('')
    filterBtnContainer.innerHTML= categoryBtns
    //selecting all the buttons
    const filterBtns= document.querySelectorAll('.filter-btn')

    //filter items by clicking each button

    filterBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const category= e.currentTarget.dataset.id
        let filteredCategory= persons.filter((filteredPerson)=>{
            if(filteredPerson.category===category){
                return filteredPerson
            }  
        })
        if(category==='all'){
            displayNames(persons)
        }
        else{
            displayNames(filteredCategory)
        }
    })
})
}