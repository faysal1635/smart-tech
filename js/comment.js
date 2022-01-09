// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDI8zmjvP0OGNL6OMPC66P_muvcu7v8C6E",
    authDomain: "smart-tech-4bfd3.firebaseapp.com",
    databaseURL: "https://smart-tech-4bfd3-default-rtdb.firebaseio.com",
    projectId: "smart-tech-4bfd3",
    storageBucket: "smart-tech-4bfd3.appspot.com",
    messagingSenderId: "179404506131",
    appId: "1:179404506131:web:bced577deb717ae4daabe6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();


function post_comment() {
    // name_val = "Faysal Bhai";
    // comment_val = "Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire! Faysal Bhai billionaire!";
    name_val = document.getElementById("name-id").value;
    comment_val = document.getElementById("comment").value;
    make_comment(name_val, comment_val);
    // pushToDb(name_val, comment_val);


    document.getElementById("name-id").value = "";
    document.getElementById("comment").value = "";
}

function pushToDb(name, comment) {
    db.ref('comments').push({
        name: name,
        comment: comment,
    })
}

function make_comment(name, comment) {
    name_val = name;
    comment_val = comment;


    blog_content = document.createElement('div');
    blog_content.className = "blog-comments-content";
    media = document.createElement('div');
    media.className = "media";
    name_div = document.createElement('div');
    name_div.className = "media-body";
    name_header = document.createElement('div');
    name_header.className = "media-heading";
    h_4 = document.createElement('h4');
    h_4.innerText = name_val;
    name_header.appendChild(h_4);
    comment_para = document.createElement('p');
    comment_para.innerText = comment_val;



    name_div.appendChild(name_header);
    name_div.appendChild(comment_para);
    media.appendChild(name_div);
    blog_content.appendChild(media);

    document.getElementById("blog-comments").appendChild(blog_content);
}