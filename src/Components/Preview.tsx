import React, { useEffect, useState } from 'react'
import {  Field, Head, MainDiv } from '../page/SurveyForm'
import styled from 'styled-components'
import { useUser } from '../GolobelContext/UserContext'
import axios from 'axios'
import { API_URL } from '../Constants/constant'

const Preview = () => {

  const {user} = useUser()
  const [response,setResponse] = useState<any>()

  const getResponse = async()=>{
    return await axios.get(`${API_URL}/response/getResponseByUser?UserMail=${user.email}`).then((response)=>{
      setResponse(response.data.SurveyResponse)
    })
  }

  
 useEffect(()=>{
    getResponse()
  },[])

  console.log(response)

  return (
    <MainDiv>
      <Form>
      <Head>
        Your Survey Preview
      </Head>
      <p>
        Name.: {response?.name} 
      </p>
      <p>
        Email.: {response?.email}
      </p>
      <p>
        Topic of Survey.: {response?.topic}
      </p>
      {response?.topic === 'Technology'&& (
        <Field>
            <p>
              Your Favorite Language = {response?.answerOne}
            </p>
        </Field>
          )}
        {user.topic === 'Technology'&& (
        <Field>
            <p>
              Your Years of Experience in {response?.answerOne} is {response?.answerTwo}
            </p>
        </Field>
          )}
        {user.topic === 'Health'&& (
        <Field>
            <p>
              How Frequently you exercise  = {response?.answerOne}
            </p>
        </Field>
          )}
        {user.topic === 'Health'&& (
        <Field>
            <p>
              Your Diet Preference  = {response?.answerTwo}
            </p>
        </Field>
          )}
        {user.topic === 'Education'&& (
        <Field>
            <p>
              Your Highest Qualification  = {response?.answerOne}
            </p>
        </Field>
          )}
        {user.topic === 'Education'&& (
        <Field>
          Your doing {response?.answerOne} in the field of {response?.answerTwo}
        </Field>
          )}
        
      <p>Thanks for taking our Survey..!</p>
          
      </Form>
    </MainDiv>
  )
}

const Form = styled.div`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50vw;
  margin: 2rem;
  height: 100vh;
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
  p{
    font-size: 1.5rem;
    color: #f5f5f5f5;
    font-weight: 300;
  }
`


export default Preview
