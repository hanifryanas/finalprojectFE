import React from 'react'
import Header from '../header'
import FormLelang from '../form/FormLelang'
import { Container } from '@mui/system'

const FormLelangPage = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <FormLelang />
            </Container>

        </div >
    )
}

export default FormLelangPage