function toggleMenu(){
    var mobileMenu = document.querySelector("#mobileMenu");
    var mobileMenuList = document.querySelector("#mobileMenuList");
    var list = document.querySelectorAll('.nav-list li')   

    mobileMenu.classList.toggle("active");
    mobileMenuList.classList.toggle("active");
    for(var i=0;i<list.length;i++){ 
        list[i].onclick = function(){
            setTimeout(function() {
                mobileMenu.classList.remove("active");
                mobileMenuList.classList.remove("active");
            }, 100);      
        }  
    }   
}


function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

document.getElementById('tab1').style.display = 'block';
document.getElementById('tab1').classList.add('active');