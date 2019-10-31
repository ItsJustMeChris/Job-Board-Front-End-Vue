<template>
  <div class="home">
    <div id="jobs">
      <p>Browse over 6 Live Jobs</p>
      <p id="quote">Your job search, just got better</p>
    </div>
    <div id="search">
      <input placeholder="Search for a job" id="search-job" type="text" />
      <input placeholder="Location" id="search-location" type="text" />
      <button id="search-button">Search</button>
    </div>
    <div id="job-cards">
      <div class="job-card">
        <img
          class="company-logo"
          src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png"
          alt
        />
        <div class="company-info">
          <p class="job-title">VueJS Developer</p>
          <span class="company-name">Company</span>
          <span class="company-location">Boston</span>
        </div>
        <div class="listing-info">
          <span class="tag fulltime">Full Time</span>
          <span class="posted">October 26, 2019</span>
        </div>
      </div>
      <div class="job-card">
        <img
          class="company-logo"
          src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png"
          alt
        />
        <div class="company-info">
          <p class="job-title">VueJS Developer</p>
          <span class="company-name">Company</span>
          <span class="company-location">Boston</span>
        </div>
        <div class="listing-info">
          <span class="tag parttime">Part Time</span>
          <span class="posted">October 26, 2019</span>
        </div>
      </div>

      <div class="job-card">
        <img
          class="company-logo"
          src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png"
          alt
        />
        <div class="company-info">
          <p class="job-title">VueJS Developer</p>
          <span class="company-name">Company</span>
          <span class="company-location">Boston</span>
        </div>
        <div class="listing-info">
          <span class="tag intern">Intern</span>
          <span class="posted">October 26, 2019</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>

<style scoped>
div#jobs {
  height: 300px;
  background: linear-gradient(45deg, #0072ff, #00adff);
  display: flex;
  border-radius: 1em;
  place-content: center;
  flex-direction: column;
}
p {
  align-self: center;
  margin: 0 auto;
  color: #fff;
  font-size: 3em;
}
p#quote {
  font-size: 1em;
}
div#search {
  margin: 0 auto;
  padding: 1em;
  height: 4em;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  border-radius: 1em;
  box-shadow: 0px 4px 14px 0px #000;
  margin: -3em 4em 0em 4em;
}
input#search-job {
  border: none;
  border-right: 1px solid #dcdcdc;
  font-size: 2em;
  padding: 1em;
}
input#search-location {
  border: none;
  font-size: 2em;
  padding: 1em;
}
button#search-button {
  border: none;
  background: #0072ff;
  width: 6em;
  font-size: 1.2em;
  border-radius: 1em;
  color: #fff;
  margin-left: 1em;
}

div#job-cards {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-top: 8em;
}

.job-card {
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #dadada;
}

img.company-logo {
  height: 40px;
  border: 1px solid #f5f5f5;
  border-radius: 1em;
  padding: 0.5em;
}

.company-info {
  width: 75%;
}

p.job-title {
  color: #696969;
  font-size: 2em;
}

span.company-name {
  color: #a7a7a7;
  font-size: 1em;
  margin-right: 2em;
}

span.company-location {
  color: #a7a7a7;
  font-size: 1em;
}
span.tag {
  padding: 0.5em;
  border-radius: 1em;
  text-align: center;
  font-weight: bold;
}
span.tag.fulltime {
  background: #94ffe1;
}
span.tag.parttime {
  background: #94f3ff;
}
span.tag.intern {
  background: #ffd494;
}
.listing-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

span.posted {
  color: #a7a7a7;
  font-size: 1em;
}
</style>
