import React, { useState } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import Preview from '../Components/Preview'
import { useUser } from '../GolobelContext/UserContext'
import axios from 'axios'
import { API_URL } from '../Constants/constant'
import Swal from 'sweetalert2'


const SurveyForm = () => {

  const [first,setFirst] = useState<string>('')
  const [second,setSecond] = useState<string>('')
  const [preview,setPreview] = useState<boolean>(false)

  const {user} = useUser()

  const HandleSubmit=async(e:any)=>{
    e.preventDefault();
    await axios.post(`${API_URL}/response/uploadResponse`,{
      name:user.name,
      email:user.email,
      topic:user.topic,
      answerOne:first,
      answerTwo:second,
    }).then((response)=>{
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thanks for taking the Survey',
          showConfirmButton: false,
          timer: 1500
      });
  });
      setPreview(true)
  }

  return (
    <MainDiv>
     { preview === false &&  <Form>
      <Register>
      <ImageDeco>
        <div className="layer">
          <p>
            Survey on {user.topic}
          </p>
        </div>
        <img src="/assets/form_image.jpg" alt="" />
      </ImageDeco>
        <Head>
        Welcome to our Survey Form
        <p>
        Please answer the Bellow asked question carefully..!
        </p>
        </Head>
        <Field>
          Name.: {user.name}
        </Field>
        <Field>
          Email.: {user.email}
        </Field>
        <Field>
          Survey Topic.: {user.topic}
        </Field>
          
        {user.topic === 'Technology'&& (
        <Field>
            <p>
              Your Favorite Language ?
            </p>
           <select name="Position" id="" onChange={(e:any)=>setFirst(e.target.value)} required>
           <option value="" hidden>Select Answer</option>
           <option value={"JavaScript"}>
             {"JavaScript"}
           </option>
           <option value={"Python"}>
             {"Python"}
           </option>
           <option value={"Java"}>
             {"Java"}
           </option>
           <option value={"C#"}>
             {"C#"}
           </option>
         </select>
        </Field>
          )}
        {user.topic === 'Technology'&& (
        <Field>
            <p>
              Your Years of Experience ?
            </p>
           <input type="text" name="" id="" placeholder='your experience' onChange={(e:any)=>setSecond(e.target.value)}/>
        </Field>
          )}
        {user.topic === 'Health'&& (
        <Field>
            <p>
              How Frequently you exercise ?
            </p>
           <select name="Position" id="" onChange={(e:any)=>setFirst(e.target.value)} required>
           <option value="" hidden>Select Answer</option>
           <option value={"Daily"}>
             {"Daily"}
           </option>
           <option value={"Weekly"}>
             {"Weekly"}
           </option>
           <option value={"Monthly"}>
             {"Monthly"}
           </option>
           <option value={"Rarely"}>
             {"Rarely"}
           </option>
         </select>
        </Field>
          )}
        {user.topic === 'Health'&& (
        <Field>
            <p>
              Your Diet Preference ?
            </p>
           <select name="Position" id="" onChange={(e:any)=>setSecond(e.target.value)} required>
           <option value="" hidden>Select Answer</option>
           <option value={"Vegetarian"}>
             {"Vegetarian"}
           </option>
           <option value={"Vegan"}>
             {"Vegan"}
           </option>
           <option value={"Non-Vegetarian"}>
             {"Non-Vegetarian"}
           </option>
         </select>
        </Field>
          )}
        {user.topic === 'Education'&& (
        <Field>
            <p>
              Your Highest Qualification ?
            </p>
           <select name="Position" id="" onChange={(e:any)=>setFirst(e.target.value)} required>
           <option value="" hidden>Select Answer</option>
           <option value={"High School"}>
             {"High School"}
           </option>
           <option value={"Bachelor's"}>
             {"Bachelor's"}
           </option>
           <option value={"Master's"}>
             {"Master's"}
           </option>
           <option value={"PHD"}>
             {"PHD"}
           </option>
         </select>
        </Field>
          )}
        {user.topic === 'Education'&& (
        <Field>
          Your Field of Study ?
          <input type="text" name="" id="" placeholder='Stream' onChange={(e:any)=>setSecond(e.target.value)}/>
        </Field>
          )}
        <Field>
        <button onClick={(e)=>{HandleSubmit(e)}}>Submit</button>
        </Field>
      </Register>
      </Form>}
      {preview === true && <Preview/>}
    </MainDiv>
  )
}

export const Head = styled.div`
    color: #f5f5f5f5;
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 0 1.5rem 0;
    p{
      font-size: .8rem;
      margin: 10px 0 0 10px;
    }
`

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`
const ImageDeco = styled.div`
  position: relative;
  width: 50vw;
  height: 35vh;
  cursor: default;
  img{
    width: inherit;
    height: inherit;
    border-radius: 15px;
    object-fit: cover;
  }
  .layer{
    z-index: 2;
    height: inherit;
    width: inherit;
    position: absolute;
    background: rgba( 107, 55, 178, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #f5f5f5f5;
    font-size: 2rem;
    p{
      font-weight:200 ;
      margin: 3rem 1rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const Form = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width: 900px) {
    width: 100vw;
    margin: 0;
  }
`
const Register = styled.form`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  margin: 2rem;
  width: 52vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input{
    background-color: #2D292E;
    border: solid #494849 1px;
    padding: 10px;
    color: #f5f5f5f5;
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    width: 280px;
  }
  input:hover{
    border: solid #ffbaff 1px;
  }
  input:focus{
    background-color: #343435;
    border: solid #7330C6 1px;
    outline: none;
  }
  button {
  text-decoration: none;
  margin: 0 0 2rem 0;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  color: #f5f5f5f5;
  width: 10rem;
  height: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 10px;
}
`
export const Field = styled.div`
  color: #f5f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  select{
    color: gray;
    width: 20vw;
    border-radius: 50px;
    background: rgba( 53, 22, 108, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
    padding: 1rem;
    margin: 1rem;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px) {
      width: 55vw;
    }
}
option{
    width: 20vw;
    border-radius: 50px;
    background: rgba( 53, 22, 108, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
    padding: 1rem;
    margin: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
}
  
`

export default SurveyForm
