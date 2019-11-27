<template>
  <div>
    <div>
      <vuestic-navbar>
        <span slot="logo">
          <img class="logo" src="../assets/icons/vue-logo3.png.png" />
        </span>

       

        
          
         <div>
          <a class="btn btn-with-icon rounded-icon my-2 my-sm-0" >
          
               <vuestic-dropdown
      v-model="isShown"
      position="bottom"
    >
      <div
        v-for="option in options"
        :key="option.name"
        class="dropdown-item plain-link-item"
      >
        <router-link :to="{name: option.redirectTo}" class="plain-link" href="#">
          {{option.name}}
        </router-link>
      </div>
    </vuestic-dropdown>
             <i class="ion-md-lock ion"></i>
          </a>
        </div>
      
      </vuestic-navbar>
    </div>
    <div class="container" style="padding: 20px;">
      <carousel :perPage="1" :autoplay="true">
        <slide>
          <img src="../assets/img/landing/slide2.jpg" class="img-fluid" height="290px" width="100%" />
        </slide>
        <slide>
          <img src="../assets/img/landing/slide3.jpg" class="img-fluid" height="290px" width="100%" />
        </slide>
        <slide>
          <img src="../assets/img/landing/slide5.jpg" class="img-fluid" height="290px" width="100%" />
        </slide>
        <slide>
          <img src="../assets/img/landing/slide2.jpg" class="img-fluid" height="290px" width="100%" />
        </slide>
      </carousel>
    </div>
    <div>
      <section id="features" class="container services">
        <div class="row">
          <div class="col-sm-3">
            <h2>ABOUT US</h2>
            <p>Spruce Support operates within the Berkshire region but will be looking to expand to other regions in due course. We supply highly qualified staff and we also employ the most modern methods of management and administration within our company.</p>
          </div>

          <div class="col-sm-6">
            <h2>Our Mission</h2>
            <p>
              We at Spruce Support endeavour to respect and treat all our clients, personnel and stakeholders as vital individuals of our organisation.
              We will treat all our clients and staff with dignity and the respect that they deserve.
              We will ensure that our staff are experienced and trained to deliver quality care and support so that people supported can have their needs met through constructive approach that will demonstrate their chosen lifestyle.
              We will listen and act in an informed manner, ensuring that ongoing practice is reflective of Spruce Support's policies and procedures.
              We will work to establish positive working partnerships with all those involved with our staff.
              We will provide our clients and the people we look after with a professional and efficient service at all times.
              ck the package that's right for your hiring needs and growth stage
              .
            </p>
          </div>

          <div class="col-sm-3">
            <h2>Our Vision.</h2>
            <p>
              Spruce Support is committed to supplying support staff that are experienced, highly qualified and very serious with what they do. We aim to provide quality services in the area of care and social work.
              We strive to deliver high quality and cost effective services to all our clients.
              We work closely with our clients in order to provide the right support staff to match people supported needs so that they reap maximum benefit.
            </p>
          </div>
        </div>
      </section>

      <section class="container features">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>
              A bundle of excellence
              <span class="navy">for Your Home</span>
            </h1>
            <p>We provide services to help you grow</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 text-center wow fadeInLeft">
            <div>
              <i class="fa fa-mobile features-icon"></i>
              <h2>Effective communication</h2>
              <p>we are convenient to work with and reaching us.</p>
            </div>
            <div class="m-t-lg">
              <i class="fa fa-line-chart features-icon"></i>
              <h2>Budgeting</h2>
              <p>
                Perfect mathing your consumptions......
                .
              </p>
            </div>
            <a href="https://youtu.be/RCpaS6s?t=15" class="btn btn-primary">Learn more</a>
          </div>
          <div class="col-md-6 text-center wow zoomIn">
            <img src="../assets/img/landing/perspective.jpg" alt="dashboard" class="img-fluid" />
          </div>
          <div class="col-md-3 text-center wow fadeInRight">
            <div>
              <i class="fa fa-medkit features-icon"></i>
              <h2>Medications</h2>
              <p>Safe handling and administration of medication.</p>
            </div>
            <div class="m-t-lg">
              <i class="fa fa-home features-icon"></i>
              <h2>Professional Cleaning</h2>
              <p>Cleaning and general maintenance of people's homes.</p>
            </div>
            <a href="https://youtu.be/YmZ4lDLONlo" class="btn btn-primary">Learn more</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="navy-line"></div>
            <h1>Simple. Affordable. Effective</h1>
            <p>
              We aim to offer the best and nothing short of the best.
              .
            </p>
          </div>
        </div>
        <div class="row features-block">
          <div class="col-lg-6 features-text wow fadeInLeft">
            <small>Where caring services are deployed</small>
            <h2>We caring. affordable, engaging & less stressful</h2>
            <p>
              All aspects of personal
              <strong>CARE</strong> at the same time supporting the people they look after to develop skills and promote independence.
              Accompany the people they look after in the community, support them and encourage them to be of their community.
              Carrying and moving using aids while employing manual handling practices.
              .
            </p>
            <p>
              <a class="btn btn-lg btn-primary" href="/" role="button">See us in action</a>
              <a class="caption-link" href="#" role="button"></a>
            </p>
          </div>
          <div class="col-lg-6 text-right wow fadeInRight">
            <iframe
              width="550"
              height="300"
              src="https://www.youtube.com/embed/HIAtT8ZpuLw"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="navy-line"></div>
              <h1>
                We Also
                <span class="navy">Hire Workers</span>
              </h1>
              <p>Thinking of Joining Us?</p>
            </div>
          </div>
          <div class="row features-block">
            <div class="col-lg-3 features-text wow fadeInLeft">
              <small>REQUIREMENTS</small>
              <h2>Because great hiring starts with great interactions</h2>
              <ul>
                <li>Passport and work permit.</li>
                <li>Two passport-sized photos.</li>
                <li>Details of two employer references</li>
              </ul>
              <a href="https://youtu.be/1111AeW4Gm0" class="btn btn-primary">Learn more</a>
            </div>
            <div class="col-lg-6 text-right m-t-n-lg wow zoomIn">
              <img src="../assets/img/landing/iphone.jpg" class="img-fluid" alt="dashboard" />
            </div>
            <div class="col-lg-3 features-text text-left wow fadeInRight">
              <small>OUR HIRE</small>
              <h2>We recruit on regular basis anybody who has had some care experience and any qualifications in care work would definitely be an advantage</h2>
              <ul>
                <li>Certificates of CPR and Manual Handling dated within the last twelve months.</li>
                <li>Full bank details and proof of your National Insurance Number.</li>
                <li>For trained Nurses, NMC Pin Card and Statement of Entry.</li>
                <li>A copy of your bank statement or utility bill, which must be no more than 3 months old.</li>
              </ul>
              <a href="https://youtu.be/HIAtT8ZpuLw" class="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline gray-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="navy-line"></div>
              <h1>Choose Us Today</h1>
              <p>We supply highly qualified staff and we also employ the most modern methods of management and administration within our company.</p>
            </div>
          </div>
          <div class="row features-block">
            <div class="col-lg-12">
              <div
                id="vertical-timeline"
                class="vertical-container light-timeline center-orientation"
              >
                <div class="vertical-timeline-block">
                  <div class="vertical-timeline-icon navy-bg">
                    <i class="fa fa-comments"></i>
                  </div>

                  <div class="vertical-timeline-content">
                    <h2>Attract</h2>
                    <p>
                      We aim to provide quality services in the area of care and social work.
                      We strive to deliver high quality and cost effective services to all our clients.
                    </p>
                    <span class="vertical-date">
                      Aims and Objectives.
                      <br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="navy-line"></div>
              <h1>Great benefits for your home!</h1>
              <p>Free up your time for enjoyable, high-value work and increase recruiter efficiency.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-1 features-text"></div>
            <div class="col-lg-2 features-text">
              <i class="fa fa-check-circle big-icon pull-right"></i>
            </div>
            <div class="col-lg-3 features-text">
              <h2>Work smarter</h2>
              <p>Let us work for you</p>
            </div>
            <div class="col-lg-2 features-text">
              <i class="fa fa-money big-icon pull-right"></i>
            </div>
            <div class="col-lg-3 features-text">
              <h2>Save money</h2>
              <p>Our pocket friendly services saves you more!</p>
            </div>
            <div class="col-lg-1 features-text"></div>
          </div>

          <div class="row">
            <div class="col-lg-1 features-text"></div>
            <div class="col-lg-2 features-text">
              <i class="fa fa-clock-o big-icon pull-right"></i>
            </div>
            <div class="col-lg-3 features-text">
              <h2>Save time</h2>
              <p>Get our convenient services</p>
            </div>
            <div class="col-lg-2 features-text">
              <i class="fa fa-users big-icon pull-right"></i>
            </div>
            <div class="col-lg-3 features-text">
              <h2>Best Services</h2>
              <p>Qualified staffs attend for you</p>
            </div>
            <div class="col-lg-1 features-text"></div>
          </div>
        </div>
      </section>
      <section id="pricing" class="pricing">
        <div class="container">
          <div class="row m-b-lg">
            <div class="col-lg-12 text-center">
              <div class="navy-line"></div>
              <h1>Affordable & flexible pricing options</h1>
              <p>Your first experience is on us! Get started with us today.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 wow zoomIn">
              <ul class="pricing-plan list-unstyled">
                <li class="pricing-title">Young Age</li>
                <li class="pricing-desc">Growing steadily? This package is perfect for young people.</li>
                <li class="pricing-price">
                  <span>$90</span>
                </li>
                <li>Per day</li>
                <li>Laundry.</li>
                <li>Food preparation.</li>
                <li>Shopping</li>
                <li>Medication.</li>
                <li>
                  <a class="btn btn-primary btn-xs" href="#">Try it</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-6 wow zoomIn">
              <ul class="pricing-plan list-unstyled selected">
                <li class="pricing-title">Middle Age</li>
                <li class="pricing-desc">Get everything you need for your family with this Package.</li>
                <li class="pricing-price">
                  <span>$149</span>
                </li>
                <li>Per day</li>
                <li>Laundry.</li>
                <li>Food preparation.</li>
                <li>Shopping</li>
                <li>Medication.</li>
                <li>
                  <a class="btn btn-primary btn-xs" href="#">Try it</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 wow zoomIn">
              <ul class="pricing-plan list-unstyled">
                <li class="pricing-title">Old Age</li>
                <li class="pricing-desc">Growing steadily? This package is perfect for young people.</li>
                <li class="pricing-price">
                  <span>$100</span>
                </li>
                <li>Per day</li>
                <li>Laundry.</li>
                <li>Food preparation.</li>
                <li>Shopping</li>
                <li>Medication.</li>
                <li>
                  <a class="btn btn-primary btn-xs" href="#">Try it</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="gray-section contact">
        <div class="container">
          <div class="row m-b-lg">
            <div class="col-lg-12 text-center">
              <div class="navy-line"></div>
              <h1>Say hello or drop us some feedback</h1>
              <p>We'd love to hear from you</p>
            </div>
          </div>
          <div class="row m-b-lg">
            <div class="col-lg-12">
              <p class="text-color" align="center">
                Our highly qualified team and 24/7 customer support is dedicated to working with you to bring you the best experience possible. If you would like to know more or have queries kindly get in touch with us today at
                <strong>info@sprucesupport.com</strong>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <a
                href="mailto:
                info@sprucesupport.com"
                class="btn btn-primary"
              >Send us mail</a>
              <p class="m-t-sm">Or Follow us on Social Media</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <ul class="list-inline social-icon">
                <li>
                  <a href="https://www.facebook.com/">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  </div>
</template>

<script>
import VuesticIconVuestic from "../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic";
import VuesticNavbar from "../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar";

import HeaderSelector from "./admin/app-navbar/components/HeaderSelector";

import login from "./auth/login/Login";
import ProfileDropdown from "./admin/app-navbar/components/dropdowns/ProfileDropdown";
import MenuDropdown from "./admin/app-navbar/components/dropdowns/MenuDropdown";
import SidebarLink from "./admin/app-sidebar/components/SidebarLink";

export default {
  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    ProfileDropdown,
    MenuDropdown,
    login,
    SidebarLink
  },
  data() {
    return {
       isShown: false,
      name: null,
      email: null,
      password: null,
    
    };
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'signup',
          redirectTo: 'signup',
        },
        {
          name: 'login',
          redirectTo: 'login',
        },
      ],
    },
  },
  computed: {
    // meetups() {
    //   return this.$store.getters.featuredMeetups;
    // },
    // loading() {
    //   return this.$store.getters.loading;
    // }
  },
  methods: {
    showLargeModal() {
      this.$refs.largeModal.open();
    },
    login() {},
    register() {}
  }
};
</script>
<style  scoped>
.logo {
  display: inline-block;
  width: 80%;
  padding: 10px;
}
.social-icon a {
  background: #ea5d70;
  color: #fff;
  padding: 4px 8px;
  height: 28px;
  width: 28px;
  position: center;
  border-radius: 50px;
}

.social-icon a:hover {
  background: #0084ff;
}

.img-small {
  height: 88px;
  width: 88px;
}

.pricing-plan {
  margin: 20px 30px 0 30px;
  border-radius: 4px;
}

.pricing-plan.selected {
  transform: scale(1.1);
  background: #f4f4f4;
}

.pricing-plan li {
  padding: 10px 16px;
  border-top: 1px solid #e7eaec;
  text-align: center;
  color: #aeaeae;
}

.pricing-plan .pricing-price span {
  font-weight: 700;
  font-size: 30px;
  color: #ea5d70;
}

li.pricing-desc {
  font-size: 14px;
  border-top: none;
  padding: 20px 16px;
}

li.pricing-title {
  background: #ea5d70;
  color: #fff;
  padding: 10px;
  border-radius: 4px 4px 0 0;
  font-size: 22px;
  font-weight: 600;
}

.testimonials {
  padding-top: 80px;
  padding-bottom: 50px;
  /* background-color: ; */
  background-image: url("../assets/img/landing/avatar_all.png");
}

.big-icon {
  font-size: 56px !important;
}

.features .big-icon {
  color: #ea5d70 !important;
}

.contact {
  background-image: url("../assets/img/landing/word_map.png");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-top: 60px;
}

section.timeline {
  padding-bottom: 30px;
}

section.comments {
  padding-bottom: 80px;
}

.comments-avatar {
  margin-top: 25px;
  margin-left: 22px;
}

.comments-avatar .commens-name {
  font-weight: 600;
  font-size: 14px;
}

.comments-avatar img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}

.bubble {
  position: relative;
  height: 120px;
  padding: 20px;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  font-style: italic;
  font-size: 14px;
}

.bubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 15px 14px 0;
  border-color: #ffffff transparent;
  display: block;
  width: 0;
  z-index: 1;
  bottom: -15px;
  left: 30px;
}

.btn-primary.btn-outline:hover,
.btn-success.btn-outline:hover,
.btn-info.btn-outline:hover,
.btn-warning.btn-outline:hover,
.btn-danger.btn-outline:hover {
  color: #fff;
}

.btn-primary {
  background-color: #ea5d70;
  border-color: #ea5d70;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  font-weight: 700;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  background-color: #0084ff;
  border-color: #0084ff;
  color: #ffffff;
}

.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
  background-image: none;
}

.btn-primary.disabled,
.btn-primary.disabled:hover,
.btn-primary.disabled:focus,
.btn-primary.disabled:active,
.btn-primary.disabled.active,
.btn-primary[disabled],
.btn-primary[disabled]:hover,
.btn-primary[disabled]:focus,
.btn-primary[disabled]:active,
.btn-primary.active[disabled],
fieldset[disabled] .btn-primary,
fieldset[disabled] .btn-primary:hover,
fieldset[disabled] .btn-primary:focus,
fieldset[disabled] .btn-primary:active,
fieldset[disabled] .btn-primary.active {
  background-color: #1dc5a3;
  border-color: #1dc5a3;
}

.caption-link:hover {
  text-decoration: none;
  color: inherit;
}

.services {
  padding-top: 60px;
}

.services h2 {
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 600;
  text-transform: uppercase;
}

.features-block {
  margin-top: 40px;
}

.features-text {
  margin-top: 40px;
}

.features small {
  color: #ea5d70;
}

.features h2 {
  font-size: 18px;
  margin-top: 5px;
}

.features-text-alone {
  margin: 40px 0;
}

.features-text-alone h1 {
  font-weight: 200;
}

.features-icon {
  color: #ea5d70;
  font-size: 40px;
}

.navy-section {
  margin-top: 60px;
  background: #ea5d70;
  color: #fff;
  padding: 20px 0;
}

.gray-section {
  background: #f4f4f4;
  margin-top: 60px;
}

.team-member {
  text-align: center;
}

.team-member img {
  margin: auto;
}

.carousel-caption {
  position: absolute;
  top: 100px;
  left: 0;
  bottom: auto;
  right: auto;
  text-align: left;
}

.carousel-caption {
  position: absolute;
  top: 100px;
  left: 0;
  bottom: auto;
  right: auto;
  text-align: left;
}

.carousel-caption.blank {
  top: 140px;
}

.carousel-image {
  position: absolute;
  right: 10px;
  top: 150px;
}

.carousel-indicators {
  padding-right: 60px;
}

.carousel-caption h1 {
  font-weight: 700;
  font-size: 43px;
  text-transform: uppercase;
  text-shadow: none;
  letter-spacing: -1.5px;
}

.carousel-caption p {
  font-weight: 500;
  text-transform: none;
  text-shadow: none;
}

.caption-link {
  color: #fff;
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 400;
}

.caption-link:hover {
  text-decoration: none;
  color: inherit;
}

.services {
  padding-top: 60px;
}

.services h2 {
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 600;
  text-transform: uppercase;
}

.features-block {
  margin-top: 40px;
}

.features-text {
  margin-top: 40px;
}

.features small {
  color: #ea5d70;
}

.features h2 {
  font-size: 18px;
  margin-top: 5px;
}

.features-text-alone {
  margin: 40px 0;
}

.features-text-alone h1 {
  font-weight: 200;
}

.features-icon {
  color: #ea5d70;
  font-size: 40px;
}

.navy-section {
  margin-top: 60px;
  background: #ea5d70;
  color: #fff;
  padding: 20px 0;
}

.gray-section {
  background: #f4f4f4;
  margin-top: 60px;
}

.team-member {
  text-align: center;
}

.team-member img {
  margin: auto;
}
</style>