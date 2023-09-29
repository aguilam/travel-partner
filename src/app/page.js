'use client'
import './page.css'
import Page from './weather.js';
import { Button,Form, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
export default function Home() {
  Page()
  return (
    <main>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
        className='Form'
      >
        <Form.Item
          label="Откуда"
          name="username"
          className='Form__input'
          rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Куда"
          name="password"
          className='Form__input'
          rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Туда"
          name="password"
          className='Form__input'
          rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
          offset: 8,
          span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className='Form__button'>
            Посмотреть билеты
          </Button>
        </Form.Item>
      </Form>
      <div className='Feature__container'>
        <p className='Feature__title'>Предлагаем вам посмотреть наш функционал</p>
        <div className='Feature__info_container'>
          <img src="" alt="" className='Feature__image' />
          <p className='Feature__description'>Посмотреть билеты или отели</p>
        </div>
        <div className='Feature__info_container'>
          <img src="" alt="" className='Feature__image'/>
          <p className='Feature__description'>Собрать сумку для путешествия с помощью AI</p>
        </div>
        <div className='Feature__info_container'>
          <img src="" alt="" className='Feature__image'/>
          <p className='Feature__description'>Проверить погоду на время вашего отпуска</p>
        </div>
      </div>
      <div className='Cities__container'>
        <div className='Cities__header_container'>
          <div className='Cities__header'>
            <p className='Cities__title'>Мы предлагаем вам посмотреть эти прекрасные города</p>
            <div className='Cities__pages'>
              <div className='Cities__circle_active'></div>
              <div className='Cities__circle'></div>
              <div className='Cities__circle'></div>
              <div className='Cities__circle'></div>
              <div className='Cities__circle'></div>
              <div className='Cities_button'>
                <svg>
                  <path d="M9.071 2a.885.885 0 0 0-.644.266L3.338 7.251c-.225.227-.331.46-.338.746 0 .286.106.525.338.745l5.09 4.992A.923.923 0 0 0 10 13.075a.961.961 0 0 0-.293-.679l-4.512-4.4 4.512-4.392A.961.961 0 0 0 10 2.925.923.923 0 0 0 9.071 2Z"></path>
                </svg>
              </div>
              <div className='Cities_button'>
                <svg>
                  <path d="M9.071 2a.885.885 0 0 0-.644.266L3.338 7.251c-.225.227-.331.46-.338.746 0 .286.106.525.338.745l5.09 4.992A.923.923 0 0 0 10 13.075a.961.961 0 0 0-.293-.679l-4.512-4.4 4.512-4.392A.961.961 0 0 0 10 2.925.923.923 0 0 0 9.071 2Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='Cities_main'>
          <div className='Cities_card'>
            <span className='Cities_title'>Астана</span>
            <p className='Cities_description'>Красивый город, прекрасный город</p>
            <button className='Cities_button'>Посмотреть билеты</button>
          </div>
        </div>
      </div>
    </main>
    )
  }