"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.getElementById("Cars").addEventListener("click", function () {
  _toConsumableArray(document.querySelectorAll(".all")).forEach(function (e) {
    e.classList.remove("yes");
  });

  _toConsumableArray(document.querySelectorAll(".car")).forEach(function (e) {
    e.classList.add("yes");
  });
});
document.getElementById("Nature").addEventListener("click", function () {
  _toConsumableArray(document.querySelectorAll(".all")).forEach(function (e) {
    e.classList.remove("yes");
  });

  _toConsumableArray(document.querySelectorAll(".nature")).forEach(function (e) {
    e.classList.add("yes");
  });
});
document.getElementById("All").addEventListener("click", function () {
  _toConsumableArray(document.querySelectorAll(".all")).forEach(function (e) {
    e.classList.add("yes");
  });
});
var test = 0;
document.getElementById("to9").addEventListener("click", function () {
  if (test == 1) {
    test = 0;

    _toConsumableArray(document.querySelectorAll(".all")).reverse().forEach(function (e) {
      document.querySelector(".imgre").appendChild(e);
    });
  }
});
document.getElementById("to1").addEventListener("click", function () {
  if (test == 0) {
    test = 1;

    _toConsumableArray(document.querySelectorAll(".all")).reverse().forEach(function (e) {
      document.querySelector(".imgre").appendChild(e);
    });
  }
}); ////////////////////////////

document.querySelector('#fileUpload').onchange = function (e) {
  ImagesUploader(_toConsumableArray(e.target.files));
  console.log(e.target.files[0].size);
};

document.querySelector(".Upload1").addEventListener("click", function () {
  document.getElementById("fileUpload").click();
});
document.querySelector(".upload").addEventListener("dragover", function (e) {
  e.preventDefault(); //drop imkan ver
});
document.querySelector(".upload").addEventListener("drop", function (e) {
  e.preventDefault(); //drop ele

  ImagesUploader(_toConsumableArray(e.dataTransfer.files)); //dataTransfer den files i gotur // hansiki kompdan gelir 
});

function ImagesUploader(files) {
  var images = 0;
  var video = 0;
  var audio = 0;
  files.forEach(function (file) {
    if (file.type.match("image/*")) {
      images += 1;
      var reader = new FileReader();

      reader.onloadend = function (event) {
        var div = document.createElement('div');
        var divImage = document.createElement('div');
        var image = document.createElement('img');
        div.classList.add("bigdiv");
        divImage.classList.add("divs");
        image.classList.add("img2");
        image.src = event.target.result; //indi elimde olan file

        divImage.appendChild(image);
        var imgName = document.createElement('div');
        imgName.innerText = file.name;
        div.appendChild(divImage);
        div.appendChild(imgName);
        document.querySelector('.imgs').appendChild(div);
      };

      reader.readAsDataURL(file);
    }

    if (file.type.match("video/*")) {
      video += 1;

      var _reader = new FileReader();

      _reader.onloadend = function (event) {
        var div = document.createElement('div');
        var divvideo = document.createElement('div');
        var i = document.createElement('i');
        div.classList.add("bigdiv");
        divvideo.classList.add("divs");
        i.classList.add('fas', 'fa-file-video');
        divvideo.appendChild(i);
        var videoname = document.createElement('div');
        videoname.innerText = file.name;
        div.appendChild(divvideo);
        div.appendChild(videoname);
        document.querySelector('.videos').appendChild(div);
      };

      _reader.readAsDataURL(file);
    }

    if (file.type.match("audio/*")) {
      audio += 1;

      var _reader2 = new FileReader();

      _reader2.onloadend = function (event) {
        var div = document.createElement('div');
        var divvideo = document.createElement('div');
        var i = document.createElement('i');
        div.classList.add("bigdiv");
        divvideo.classList.add("divs");
        i.classList.add('fas', 'fa-file-audio');
        divvideo.appendChild(i);
        var videoname = document.createElement('div');
        videoname.innerText = file.name;
        div.appendChild(divvideo);
        div.appendChild(videoname);
        document.querySelector('.audio').appendChild(div);
      };

      _reader2.readAsDataURL(file);
    }
  });
  alert(" image = " + images + "  video = " + video + "  audio = " + audio);
}