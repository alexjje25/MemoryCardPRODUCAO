import React, { useEffect, useState } from 'react'
import {CpfView} from '../styles/layouts/CPF/cpfView'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, set, onValue } from "firebase/database";
import { datatype } from 'faker/locale/zh_TW';
import { FormControlUnstyledContext } from '@mui/base';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const firebaseConfig = {
  apiKey: "AIzaSyDAynsVJ_okW1t0gVVSt7yL-s_XSv3JyPI",
  authDomain: "memory-card-db.firebaseapp.com",
  databaseURL: "https://memory-card-db-default-rtdb.firebaseio.com",
  projectId: "memory-card-db",
  storageBucket: "memory-card-db.appspot.com",
  messagingSenderId: "347132158390",
  appId: "1:347132158390:web:9284137812093169e36117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  const router = useRouter()

  const db = getDatabase(app);

  const [cpf, setCpf] = useState('')
  const [data, setData] = useState('')

  const [openSnackError, setOpenSnackError] = useState<boolean>(false)
  const [openSnackError1, setOpenSnackError1] = useState<boolean>(false)

  const currentTime = `${new Date().getDate()}/${new Date().getMonth() + 1}`

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackError(false)
  }

  const handleCloseSnack1 = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackError1(false)
  }

  function writeUserData(cpf) {
    set(ref(db, cpf), {
      cpf,
      created_at: `${new Date().getDate()}/${new Date().getMonth() + 1}`
    });
  }

  function readUserData() {
    const starCountRef = ref(db, '/');
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }

  async function verifyIfExist() {
    if (cpf === ""){
      setOpenSnackError1(true)
    }else
    if (data[cpf]) {
      if (data[cpf].created_at === currentTime) {
        setOpenSnackError(true)
      } else {
        writeUserData(cpf)
        router.push('/GameWait')
      }


    } else {
      writeUserData(cpf)
      router.push('/GameWait')
    }
  }


  useEffect(() => {
    readUserData()
  }, [])

  return (

      <CpfView>
        <Snackbar
        sx={{marginTop:'-50px'}}
          open={openSnackError}
          autoHideDuration={4000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="error"
            sx={{ width: '100%' }}
          >
            Este CPF já participou da Ação, volte amanha!
          </Alert>
        </Snackbar>

        <Snackbar
        sx={{marginTop:'-50px'}}
          open={openSnackError1}
          autoHideDuration={4000}
          onClose={handleCloseSnack1}
        >
          <Alert
            onClose={handleCloseSnack1}
            severity="error"
            sx={{ width: '100%' }}
          >
            Preencha seu CPF!
          </Alert>
        </Snackbar>

        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p style={{fontSize:'40px'}} className='title'>POR FAVOR, INFORME SEU CPF</p>




        <input type="text"
        onInput={(e: any) =>
          {
            setCpf(Math.max(0, parseInt(e.target.value) ).toString().slice(0,11))
          }}
        style={{position:'absolute', marginTop:'-180px', height:'57px', border: '1px solid gray', borderRadius:'3px' ,background:'#e8e3e3', width:'61%', fontSize:'20px', textAlign:'center' }}       maxlength="11" onkeypress="if (!isNaN(number.fromCharCode(window.event.keyCode))) return true; else return false;" />

        {/* <TextField type='number'
        inputProps={{ maxLength: 11 }} sx={{background:'#e8e3e3', border: 'none', width:'100%', max:'4'  }} value={cpf} id="outlined-basic" onInput={(e: any) =>
        {
          setCpf(Math.max(0, parseInt(e.target.value) ).toString().slice(0,11))
        }} variant="outlined" />
        <ul>
          {
            // db.data.map((value, index) => {
            //   return <li key={index}>{value}</li>
            // })
          }
        </ul> */}
        <button style={{width: '88%', height:'130px', marginTop:'120px'}} onClick={() => {
          readUserData()
          verifyIfExist()
        }} className='btn'> <p style={{fontSize:'40px', fontWeight:'700'}}>COMEÇAR</p> </button>
        </div>
      </CpfView>
    )
}
function postElement(postElement: any, data: any) {
  throw new Error('Function not implemented.');
}

