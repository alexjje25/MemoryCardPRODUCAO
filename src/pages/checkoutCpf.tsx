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
    // console.log(data[cpf].created_at, currentTime)
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
          open={openSnackError}
          autoHideDuration={4000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="error"
            sx={{ width: '100%' }}
          >
            já cadastrado!
          </Alert>
        </Snackbar>
        <Image src='/assets/fundoCpf.png' layout="fill" className='image' />
        <div className='main'>
        <p className='title'>POR FAVOR, INFORME SEU CPF</p>
        <TextField sx={{background:'#e8e3e3', border: 'none', width:'50%' }} id="outlined-basic" onChange={value => setCpf(value.target.value)} variant="outlined" />
        <ul>
          {
            // db.data.map((value, index) => {
            //   return <li key={index}>{value}</li>
            // })
          }
        </ul>
        <button onClick={() => {
          readUserData()
          verifyIfExist()
        }} className='btn'>COMEÇAR</button>
        </div>
      </CpfView>
    )
}
function postElement(postElement: any, data: any) {
  throw new Error('Function not implemented.');
}

