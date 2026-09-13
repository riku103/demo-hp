const timeData = {
  morning: {
    number: "01",
    label: "MORNING",
    title: "焼きたてと珈琲で、<br>一日の輪郭を整える。",
    text: "岡山県産小麦のトーストと、季節のジャム。窓際の光がやわらかな朝の席をご用意しています。",
    menu: "季節のモーニングプレート",
    scene: "ひとり時間・出勤前"
  },
  afternoon: {
    number: "02",
    label: "AFTERNOON",
    title: "岡山の旬を囲んで、<br>会話がほどけていく。",
    text: "白桃やシャインマスカットなど、季節の果実を使ったデザートと軽やかな珈琲を楽しむ時間です。",
    menu: "季節の果実タルトと珈琲",
    scene: "友人・家族とのカフェ時間"
  },
  sunset: {
    number: "03",
    label: "SUNSET",
    title: "暮れていく街を眺め、<br>自分の余白に戻る。",
    text: "午後の光が静かになる頃。深煎りの珈琲と小さな甘味で、一日の速度をゆるめます。",
    menu: "晴れ間ブレンドと小菓子",
    scene: "読書・旅の休憩"
  }
};

const tabs = document.querySelectorAll(".time-tab");
const fields = {
  number: document.querySelector("#timeNumber"),
  label: document.querySelector("#timeLabel"),
  title: document.querySelector("#timeTitle"),
  text: document.querySelector("#timeText"),
  menu: document.querySelector("#timeMenu"),
  scene: document.querySelector("#timeScene")
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = timeData[tab.dataset.time];
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    fields.number.textContent = data.number;
    fields.label.textContent = data.label;
    fields.title.innerHTML = data.title;
    fields.text.textContent = data.text;
    fields.menu.textContent = data.menu;
    fields.scene.textContent = data.scene;
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "CLOSE" : "MENU";
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "MENU";
}));

const toast = document.querySelector(".demo-toast");
document.querySelectorAll("[data-demo-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
