import React, {Component} from 'react'
import './style.css'
import {Form,Input,Button} from 'element-react'
import axios from '../../config/api'


class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: ''
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },
            loading:false
        }
    }
    changeValue=(key,value)=>{
       this.setState({
            form:Object.assign({}, this.state.form, {[key]:value })
       })
        console.log(this.state.form)
    }

    submitForm=(e)=> {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid && !this.state.loading) {
                this.setState({
                    loading:true
                })
                let params = this.state.form
                axios.post('login',params)
                    .then(res=>{
                       // this.state.loading = false
                        console.log(res)
                       /* if (res && res.status == '200' && res.token) {
                            localStorage.setItem('ms_username',this.ruleForm.username)
                            this[types.SET_TOKEN](res.token);
                            this.$message.success('登录成功')
                            this.$router.push({
                                name: 'index'
                            })
                        }else{
                            this.$message.error('用户名密码错误，请重新输入')
                        }*/
                    })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    render(){
        return (
            <div className="login-wrap">
                <div className="ms-login">
                    <div className="ms-title">后台管理系统</div>
                    <Form ref='form' model={this.state.form} rules={this.state.rules}  className='ms-content'>
                        <Form.Item  prop='username'>
                            <Input  onChange={this.changeValue.bind(this,'username')}  placeholder='请输入用户名' />
                        </Form.Item>
                        <Form.Item  prop='password'>
                            <Input type='password' onChange={this.changeValue.bind(this,'password')} value = {this.state.form.password} placeholder='请输入密码' />
                        </Form.Item>
                        <div className="login-btn">
                            <Button type="primary" loading={this.state.loading} onClick={this.submitForm}>登录</Button>
                        </div>
                    </Form>
    </div>
    </div>
        )

    }
}
export default View
