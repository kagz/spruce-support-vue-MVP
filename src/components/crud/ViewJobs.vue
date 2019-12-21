<template>
  <div class="collapse-page row">
    <div class="container">
      <vuestic-widget headerText="My Posted Jobs">
        <!-- <div class="spinner-border" v-if="loading" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div v-if="error">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </div> -->

<div v-for="job in jobs" :key="job.id">
  <div>
    job.title
  </div>
</div>

        <vuestic-accordion v-for="job in jobs" :key="job.id">
          <div class="jobscard">
            <vuestic-collapse>
              <span slot="header">
                <div class="col-sm-6 col-lg-6 col-xl-3 d-flex">
                  <div style="margin-right:15px ; color:black; justify-content: space-between">
                    <i class="glyphicon glyphicon-briefcase" style="color:green"></i>
                    <div class="col-sm-6 col-lg-6 col-xl-3 d-flex">{{job.title}}</div>
                  </div>
                </div>
              </span>
              <div slot="body" style="padding:10px">
                <div class="container col-md-12 d-flex flex-column align-items-center">
                  <div class="single-blog-post mb-35">
                    <div class="row">
                      <div class="col-lg-6 col-md-5">
                        <div class="single-blog-post-media mb-xs-20">
                          <div class="image">
                            <a>
                              <img
                                :src="job.imageUrl"
                                style="width:400px;height:250px"
                                class="img-fluid"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-7">
                        <div class="single-blog-post-content">
                          <h3 class="post-title">
                            <a>{{job.title}}</a>
                          </h3>
                          <div class="post-meta">
                            <p>
                              <span>
                                <i class="fa fa-user-circle"></i> Staffs Needed:
                              </span>
                              <a>{{job.staffs}}</a>
                              <span class="separator">|</span>
                              <span>
                                <i class="fa fa-calendar"></i> Start On:
                                <a>{{job.date | date}}</a>
                              </span>
                            </p>
                          </div>
                          <div class="post-meta">
                            <p>
                              <span>
                                <i class="icon glyphicon glyphicon-map-marker"></i> Location:
                              </span>
                              <a>{{job.location}}</a>
                            </p>
                          </div>
                          <p class="post-excerpt">{{job.description}}</p>
                          <div class="row">
                            <div>
                              <button class="btn btn-dark btn-micro">Pick job</button>
                            </div>
                            <div>
                              <button class="btn btn-dark btn-micro">edit job</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </vuestic-collapse>
          </div>
        </vuestic-accordion>
      </vuestic-widget>
    </div>
    <div class="col-md-12"></div>
  </div>
</template>

<script>

import { db } from '../../firebase'
export default {
  name: 'viewjobs',

  // data () {
  //   return {
  //     jobs: [],

  //     activeItem: null,
  //     modal: null,
  //   }
  // },
  firestore () {
    return {
      jobs: db.collection('createdjobs'),

    }
  },

  created () {
    console.log(this.jobs)
  }
}
</script>

<style lang="scss">
.jobscard {
  padding: 10px;
}
.time {
  color: rgb(8, 126, 24);
}
.downthere {
  justify-content: space-between;
  // padding: 20px;
}
.collapse-page {
  &__content {
    padding: 2rem;
    &__title {
      font-size: 1.375rem;
      font-weight: bold;
    }
  }
}

.blog-readmore-btn {
  background: #fff;
  border: 2px solid #e0e0e0;
  color: #323232;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  height: 47px;
  line-height: 43px;
  margin: 0 4px;
  min-width: 130px;
  padding: 0 15px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
}
.blog-readmore-btn:hover {
  background: #80bb01;
  border-color: #80bb01;
  color: #fff;
}

.single-blog-post {
  padding: 30px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.1);
}
.single-blog-post.gallery-type-post {
  display: block;
}
.single-blog-post.gallery-type-post .single-blog-post-media:hover .slick-arrow {
  visibility: visible;
  opacity: 0.6;
}
.single-blog-post.gallery-type-post
  .single-blog-post-media:hover
  .slick-arrow:hover {
  opacity: 1;
}
.single-blog-post.gallery-type-post .single-blog-post-media:hover .slick-next {
  right: 10px;
}
.single-blog-post.gallery-type-post .single-blog-post-media:hover .slick-prev {
  left: 10px;
}
.single-blog-post.gallery-type-post .slick-arrow {
  position: absolute;
  top: 50%;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #323232;
  color: #ffffff;
  line-height: 40px;
  z-index: 9;
  margin-top: -20px;
  visibility: hidden;
  opacity: 0;
}
.single-blog-post.gallery-type-post .slick-next {
  right: 30px;
  left: auto;
}
.single-blog-post.gallery-type-post .slick-prev {
  left: 30px;
  right: auto;
}
.single-blog-post .single-blog-post-media {
  position: relative;
}
.single-blog-post .single-blog-post-media .blog-categories {
  position: absolute;
  bottom: 20px;
  left: 10px;
}
.single-blog-post .single-blog-post-media .blog-categories ul li {
  display: inline-block;
}
.single-blog-post .single-blog-post-media .blog-categories ul li a {
  display: block;
  background-color: #ffffff;
  padding: 5px 10px;
  text-transform: capitalize;
  margin-right: 5px;
  border-radius: 3px;
}
.single-blog-post .single-blog-post-media .blog-categories ul li a:hover {
  background-color: #80bb01;
  color: #ffffff;
}
.single-blog-post .single-blog-post-media .video {
  overflow: hidden;
}
.single-blog-post .single-blog-post-media .video iframe {
  width: 100%;
  height: 300px;
}
@media only screen and (max-width: 479px) {
  .single-blog-post .single-blog-post-media .video iframe {
    height: 200px;
  }
}
.single-blog-post .single-blog-post-content .post-audio {
  overflow: hidden;
}
.single-blog-post .single-blog-post-content .post-audio iframe {
  width: 100%;
}
.single-blog-post .single-blog-post-content h3.post-title {
  font-size: 29px;
  line-height: 39px;
  color: #242424;
  margin-bottom: 20px;
}
@media only screen and (max-width: 575px) {
  .single-blog-post .single-blog-post-content h3.post-title {
    font-size: 25px;
  }
}
.single-blog-post .single-blog-post-content h3.post-title.sticky {
  position: relative;
  padding-left: 25px;
}
.single-blog-post .single-blog-post-content h3.post-title.sticky:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "\f08d";
  font-family: fontAwesome;
  font-size: 25px;
}
.single-blog-post .single-blog-post-content .post-meta {
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}
.single-blog-post .single-blog-post-content .post-meta p span {
  color: #999999;
}
.single-blog-post .single-blog-post-content .post-meta p a {
  font-weight: 500;
  color: #323232;
}
.single-blog-post .single-blog-post-content .post-meta p a:hover {
  color: #80bb01;
}
.single-blog-post .single-blog-post-content .post-meta p span.separator {
  padding: 0 5px;
}
.single-blog-post .single-blog-post-content p.post-excerpt {
  font-size: 15px;
  line-height: 29px;
}
</style>
