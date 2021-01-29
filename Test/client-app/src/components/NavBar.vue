<template>
    <div id="nav">
        <nav id="button-container" :class="{ inDepth: inDepth }">
            <div class="nav-button">
            </div>
            <div class="nav-button">
                <div class="topic-label">Intro</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(0)"></div>
                <div v-if="index == 0" class="circle-clicked"></div>
                <div v-if="index == 0 && inDepth" class="sub-nav-bar">
                    <div class="sub-nav-button">
                        <div class="sub-blue-bar"></div>
                        <div class="sub-circle" v-on:click="changeSubpage(1)"></div>
                        <div v-if="subIndex == 1" class="sub-circle-clicked"></div>
                    </div>
                    <div class="sub-nav-button">
                        <div class="sub-blue-bar"></div>
                        <div class="sub-circle" v-on:click="changeSubpage(2)"></div>
                        <div v-if="subIndex == 2" class="sub-circle-clicked"></div>
                    </div>
                    <div class="sub-nav-button">
                        <div class="sub-blue-bar"></div>
                        <div class="sub-circle" v-on:click="changeSubpage(3)"></div>
                        <div v-if="subIndex == 3" class="sub-circle-clicked"></div>
                    </div>
                </div>
            </div>
            <div class="nav-button">
                <div class="topic-label two-line-title">Subatomic Particles</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(1)"></div>
                <div v-if="index == 1" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Atoms</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(2)"></div>
                <div v-if="index == 2" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Compounds</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(3)"></div>
                <div v-if="index == 3" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Electricity</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(4)"></div>
                <div v-if="index == 4" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Transistors</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(5)"></div>
                <div v-if="index == 5" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Logic</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(6)"></div>
                <div v-if="index == 6" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Binary</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(7)"></div>
                <div v-if="index == 7" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label two-line-title">Basic Components</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(8)"></div>
                <div v-if="index == 8" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Assembly</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(9)"></div>
                <div v-if="index == 9" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label">Programming</div>
                <div class="blue-bar"></div>
                <div class="circle" v-on:click="changePage(10)"></div>
                <div v-if="index == 10" class="circle-clicked"></div>
            </div>
            <div class="nav-button">
                <div class="topic-label"></div>
                <div class="blue-bar top-arrowhead"></div>
                <div class="blue-bar bottom-arrowhead"></div>
            </div>
        </nav>
        <div class="switch-title">
            In Depth
        </div>
        <div class="switch-container">
            <label class="switch">
                In Depth
                <input type="checkbox" v-model="inDepth">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      inDepth: this.$store.state.inDepth
    }
  },
  methods: {
    changePage: function (id) {
      this.$store.commit('setIndex', id)
      this.$store.commit('setSubIndex', 0)
    },
    changeSubpage: function (id) {
      this.$store.commit('setSubIndex', id)
    }
  },
  computed: {
    index () {
      return this.$store.state.index
    },
    subIndex () {
      return this.$store.state.subIndex
    }
  },
  watch: {
    inDepth (newInDepth) {
      console.log(`In Depth toggled: ${newInDepth}`)
      this.$store.commit('setInDepth', newInDepth)
    }
  }
}
</script>

<style scoped>
    #nav{
        height: 100%;
        width: 100%;
    }

    #nav #button-container{
        display: flex;
        width: 100%;
        height: 57px;
        padding-top: 5rem;
    }

    #nav #button-container.inDepth{
        height: 147px;
    }

    #nav .nav-button{
        min-width: 50px;
        width: 8.333%;
        height: 25px;
    }

    #nav .nav-button .blue-bar{
        width: 100%;
        height: 7px;
        background-color: blue;
        position: relative;
        top: 6.5px;
        left: 1px;
    }

        #nav .top-arrowhead {
            transform-origin: left;
            transform: rotate(225deg);
            width: 25px !important;
            top: 9px !important;
        }

        #nav .bottom-arrowhead {
            transform-origin: left;
            transform: rotate(-225deg);
            width: 25px !important;
            top: -2px !important;
        }

        #nav .nav-button .circle {
            height: 25px;
            width: 25px;
            border-radius: 50%;
            position: relative;
            border: solid;
            background: white;
            bottom: 12.5px;
            cursor: pointer;
        }

        #nav .nav-button .circle-clicked {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            position: relative;
            background: #00f;
            bottom: 35.5px;
            cursor: pointer;
            left: 8px;
        }

        #nav .nav-button .topic-label {
            position: relative;
            transform-origin: left;
            transform: rotate(60deg);
            bottom: 87px;
            right: 48px;
            height: 27px;
            text-align: right;
            width: 105px;
        }

        #nav .nav-button .topic-label.two-line-title{
            right: 35px;
        }

        #nav .nav-button .sub-nav-bar {
            position: relative;
            transform-origin: left;
            transform: rotate(60deg);
            bottom: 40px;
            left: 18px;
            display: flex;
            width: 200px;
        }

            #nav .nav-button .sub-nav-bar .sub-nav-button {
                width: 53px;
                height: 25px;
            }

        #nav .nav-button .sub-nav-bar .sub-nav-button .sub-blue-bar {
            width: 100%;
            height: 5px;
            background-color: blue;
            position: relative;
            top: 5.5px;
            left: 1px;
        }

                #nav .nav-button .sub-nav-bar .sub-nav-button .sub-circle {
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    position: relative;
                    border: solid;
                    background: white;
                    cursor: pointer;
                    left: 34px;
                    bottom: 7.5px;
                }

                #nav .nav-button .sub-nav-bar .sub-nav-button .sub-circle-clicked {
                    height: 9px;
                    width: 9px;
                    border-radius: 50%;
                    position: relative;
                    background: #00f;
                    bottom: 22px;
                    cursor: pointer;
                    left: 40px;
                }

    #nav .switch-title{
        text-align: left;
        padding-left: 15px;
    }

    /* Toggle Switch */
    .switch {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 24px;
        margin: 0 100% 0 18px;
        color: rgba(0, 0, 0,0);
    }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border: solid 1px;
    }

        .slider:before {
            position: absolute;
            content: "";
            height: 15px;
            width: 15px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

    input:checked + .slider {
        background-color: blue;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px blue;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

        .slider.round:before {
            border-radius: 50%;
        }
</style>
