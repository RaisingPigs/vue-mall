<template>
  <div class="regist-area w">
    <div class="regist-hd">
      <p>注册新用户</p>
      <p>我有账号, 去<a href="#">登录</a></p>
    </div>
    <div class="regist-bd">
      <form action="#">
        <div class="form-item">
          <label for="phone">手机号: </label>
          <input v-model="registInfo.phone"
                 autocomplete="none"
                 id="phone"
                 type="text"
                 placeholder="请输入手机号">
          <div class="error">
            <span class="iconfont icon-cuowu"></span>
            <span>手机号码格式不正确, 请重新输入</span>
          </div>
          <div class="right">
            <span class="iconfont icon-zhengque"></span>
            <span>手机号码格式正确</span>
          </div>
        </div>
        <div class="form-item code-item">
          <label for="code">验证码: </label>
          <input v-model="registInfo.code"
                 autocomplete="none"
                 id="code"
                 type="text"
                 placeholder="请输入验证码">
          <div class="code-img">
            <!--<img src="/upload/code.png" alt="">-->
            <button @click.prevent="getRegistCode(registInfo.phone)">获取验证码</button>
          </div>
        </div>
        <div class="form-item">
          <label for="password">密码: </label>
          <input v-model="registInfo.password"
                 autocomplete="none"
                 id="password"
                 type="text"
                 placeholder="请输入密码">
          <div class="error">
            <span class="iconfont icon-cuowu"></span>
            <span>密码格式不正确, 请重新输入</span>
          </div>
          <div class="right">
            <span class="iconfont icon-zhengque"></span>
            <span>密码格式正确</span>
          </div>
        </div>
        <div class="form-item">
          <label for="repassword">确认密码: </label>
          <input v-model="registInfo.repassword"
                 autocomplete="none"
                 id="repassword"
                 type="text"
                 placeholder="请再输入一次密码">
          <div class="error">
            <span class="iconfont icon-cuowu"></span>
            <span>两次密码不一致, 请重新输入</span>
          </div>
          <div class="right">
            <span class="iconfont icon-zhengque"></span>
            <span>两次密码一致</span>
          </div>
        </div>

        <div class="form-item agreement">
          <input v-model="registInfo.agree" type="checkbox">
          <span>同意协议并注册</span>
          <a href="#">《用户协议》</a>
        </div>

        <div class="form-item regist-btn">
          <button @click.prevent="regist">完成注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "index",
    data() {
        return {
            registInfo: {
                phone: '',
                password: '',
                repassword: '',
                code: '',
                agree: false
            }
        }
    },
    computed: {
        ...mapState(
            'regist',
            ['code']
        )
    },
    watch: {
        code(newValue, oldValue) {
            console.log(newValue);
            this.registInfo.code = newValue;
        }
    },
    methods: {
        ...mapActions(
            'regist',
            {
                getRegistCode: 'getRegistCode'
            }
        ),
        regist() {
            if (this.registInfo.agree) {
                if (this.registInfo.phone &&
                    this.registInfo.code &&
                    this.registInfo.password &&
                    this.registInfo.repassword) {

                    try {
                        this.$store.dispatch('regist/regist', this.registInfo);
                        alert('注册成功, 点击确定进入登录页');
                        this.$router.push({
                            name: 'login'
                        });
                    } catch (err) {
                        alert('注册失败');
                    }
                } else {
                    alert('请填写完信息');
                }
            } else {
                alert('请确认登录协议');
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="less">
@mallRed: #b1191a;

/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*main*/
.regist-area {
  margin-top: 15px;
  border: 1px solid #cccccc;
  height: 522px;

  .regist-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    padding: 0 10px;
    background-color: #f2f2f2;

    p:nth-child(1) {
      font-size: 14px;
    }

    p:nth-child(2) {
      font-weight: bold;

      a {
        color: @mallRed;
      }
    }
  }

  .regist-bd {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 484px;

    form {
      .form-item {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 60px;

        label {
          width: 60px;
          text-align: right;
          margin-right: 5px;
        }

        input {
          width: 242px;
          height: 37px;
          border: 1px solid #cccccc;
          text-indent: 1em;
        }

        .error,
        .right {
          display: none;
          //display: flex;
          align-items: center;
          font-weight: bold;
          width: 220px;
          position: absolute;
          right: -225px;
        }

        .error {
          color: @mallRed;
        }

        .right {
          color: #55a532;
        }
      }

      .regist-btn {
        button {
          width: 200px;
          height: 34px;
          color: #ffffff;
          background-color: @mallRed;
        }

        button:hover {
          background-color: #dd1121;
        }
      }

      .code-item {
        input {
          width: 152px;
        }

        .code-img {
          width: 85px;
          height: 37px;
          margin-left: 5px;

          img {
            width: 100%;
            height: 100%;
          }

          button {
            width: 100%;
            height: 100%;
            border: 1px solid #ccc;

            &:hover {
              background-color: #f4f4f4;
            }
          }
        }
      }

      .agreement {
        display: flex;
        justify-content: center;

        input {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }

        a {
          margin-left: 3px;
          color: darkturquoise;
        }

        a:hover {
          color: @mallRed;
        }
      }

    }
  }
}
</style>
