import * as yup from 'yup'

const userSchema = yup.object().shape({
    name: yup.string().required(),
    weight: yup.number().required().positive().min(2),
    height: yup.number().required().positive().min(2),
})

export default userSchema