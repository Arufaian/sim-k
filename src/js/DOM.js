import {
  absensi,
  divisi,
  home,
  input,
  izin,
  jabatan,
  karyawan,
  lembur,
} from "./funtions";

const sidebar = document.querySelector("#sidebar");
const toggler = document.querySelector(".toggler-button");
const myList = document.querySelectorAll("#my-list > .sidebar-item");
const mainSection = document.querySelector("#main-section");
const gradient = document.querySelector("#gradient");

const contentFunction = {
  home: home,
  karyawan: karyawan,
  input: input,
  jabatan: jabatan,
  divisi: divisi,
  absensi: absensi,
  izin: izin,
  lembur: lembur,
};

// console.log(contentFunction.test());

myList.forEach((item) => {
  item.addEventListener("click", function () {
    myList.forEach((i) => i.classList.remove("actived"));

    item.classList.add("actived");

    const funcName = item.getAttribute("data-func");

    if (contentFunction[funcName]) {
      mainSection.innerHTML = contentFunction[funcName]();
    }
  });
});

toggler.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
});
