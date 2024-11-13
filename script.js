const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});



const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


// JavaScript untuk mengatur interaksi dropdown
document.querySelectorAll(".dropdown").forEach(dropdown => {
	dropdown.addEventListener("click", function() {
		this.querySelector(".dropdown-content").classList.toggle("show");
	});
});

window.addEventListener("click", function(e) {
	if (!e.target.matches(".dropdown")) {
		document.querySelectorAll(".dropdown-content").forEach(dropdown => {
			if (dropdown.classList.contains("show")) {
				dropdown.classList.remove("show");
			}
		});
	}
});

// const navLinks = document.querySelectorAll('.nav-link');
// const sections = document.querySelectorAll('section');

// navLinks.forEach(link => {
//   link.addEventListener('click',   
//  (event) => {
//     event.preventDefault();   

//     const sectionId = link.dataset.section;
//     sections.forEach(section => {
//       section.classList.remove('active');
//     });
//     document.getElementById(sectionId).classList.add('active');   

//   });
// });

const ringkasan = document.querySelector('#ringkasan')
const rekomendasibuku = document.querySelector('#rekomendasibuku')
ringkasan.style.display = 'block'
rekomendasibuku.style.display = 'none'
video.style.display='none'

function selectMenu(tipe) {

	const ringkasan = document.querySelector('#ringkasan')
	const rekomendasibuku = document.querySelector('#rekomendasibuku')
	
	
	if (tipe == 'ringkasan') {
		ringkasan.style.display = 'block'
		rekomendasibuku.style.display = 'none'
		video.style.display = 'none'
	}

	if (tipe == 'video') {
		ringkasan.style.display = 'none'
		rekomendasibuku.style.display = 'none'
		video.style.display = 'block'
	}
	
	if (tipe == 'rekomendasibuku') {
		rekomendasibuku.style.display = 'block'
		ringkasan.style.display = 'none'
		video.style.display = 'none'
	}
}


function searchSidebar() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const sidebarItems = document.querySelectorAll('#sidebar ul li ul li a'); // Target all sidebar links within dropdown menus
    let matchFound = false;

    sidebarItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();

        // Show item if it matches search input, otherwise hide it
        if (input && itemText.includes(input)) {
            item.style.display = 'block';
            matchFound = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!matchFound && input) {
        alert("No matching pages found.");
    }

    // Reset display of all items if search is cleared
    if (!input) {
        sidebarItems.forEach(item => item.style.display = 'block');
    }
}


function loadLayout() {
fetch('/sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });
}

let jsonData = [];  // JSON data to be fetched










