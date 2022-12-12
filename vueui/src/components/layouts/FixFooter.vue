<template>
  <div class="footer">
    <div class="footer__left">
      <div>Author: Nguyễn Duy Khai</div>
      <div>instructor: Dr. Ngô Lam Trung</div>
      <a href="https://www.hust.edu.vn/">Hanoi University of Science and Technology</a>
      <a href="https://www.hust.edu.vn/">School of Information and Communication Technology</a>
    </div>
    <div class="footer__right">
      <div>Release Date: Dec 2, 2022</div>
      <div>Contact:
        <li>Facebook: Nguyễn Duy Khai</li>
        <li>Github: Nguyễn Duy Khai</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixFooter",
};
</script>

<style scoped>
* {
  background-color: #001122;
  color: #ffffff;
}

.footer {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  padding: 16px 0px;
}

.footer__left, .footer_right {
  display: flex;
  flex-direction: column;
}

.footer div,
a {
  margin: 2px 16px;
}
</style>