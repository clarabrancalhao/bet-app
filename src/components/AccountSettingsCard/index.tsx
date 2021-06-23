import { useCallback, useEffect, useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useValidate from '../../hooks/useValidate'
import {
  changePassword,
  setPasswordError,
  setSecondPasswordError,
} from '../../modules/login/actions'
import { notify } from '../../utils/notify'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'
import { NewPasswordError, PasswordError } from '../ErrorMessages'
import { Card, Input, InputWrapper, Label, Title } from './styles'

const AccountSettingsCard = () => {
  const handleValidation = useValidate()
  const dispatch = useDispatch()
  const { search } = useLocation()

  const token = search.slice(1)

  const newPasswordRef = useRef<HTMLInputElement>(null)
  const repeatNewPasswordRef = useRef<HTMLInputElement>(null)

  const login = useSelector((state: RootStateOrAny) => state.login)

  const handlePasswordValidation = () => {
    handleValidation(newPasswordRef, 'password', setPasswordError)
  }

  const handlePasswordError = () => {
    if (login.passwordError) {
      handlePasswordValidation()
    }
  }

  const handleSecondPasswordValidation = () => {
    if (newPasswordRef.current?.value !== repeatNewPasswordRef.current?.value) {
      dispatch(setSecondPasswordError(true))
    } else {
      dispatch(setSecondPasswordError(false))
    }
  }

  const handleSecondPasswordError = () => {
    if (login.secondPasswordError) {
      handleSecondPasswordValidation()
    }
  }

  const handleChangePassword = () => {
    const passwordValue = newPasswordRef.current?.value
    const confirmedPasswordValue = repeatNewPasswordRef.current?.value
    if (passwordValue && confirmedPasswordValue) {
      if (!login.passwordError && !login.secondPasswordError) {
        dispatch(
          changePassword({
            token,
            password: passwordValue,
            confirmedPassword: confirmedPasswordValue,
          })
        )

        newPasswordRef.current!.value = ''
        repeatNewPasswordRef.current!.value = ''
        return
      }
      notify('Please, check the passwords')
    }
  }

  const handleRemoveErrors = useCallback(() => {
    dispatch(setPasswordError(false))
    dispatch(setSecondPasswordError(false))
  }, [dispatch])

  useEffect(() => {
    return handleRemoveErrors()
  }, [handleRemoveErrors])

  return (
    <Card>
      <Title>Account Settings</Title>
      <InputWrapper>
        <Label>New Password</Label>
        <Input
          ref={newPasswordRef}
          type="password"
          onBlur={handlePasswordValidation}
          onChange={handlePasswordError}
        />
        {login.passwordError && <PasswordError />}
      </InputWrapper>
      <InputWrapper>
        <Label>Repeat Password</Label>
        <Input
          ref={repeatNewPasswordRef}
          type="password"
          onBlur={handleSecondPasswordValidation}
          onChange={handleSecondPasswordError}
        />
        {login.secondPasswordError && <NewPasswordError />}
      </InputWrapper>
      <Button
        onClick={handleChangePassword}
        className={BUTTON_THEME.GREEN_BORDER}>
        Save new password!
      </Button>
    </Card>
  )
}

export default AccountSettingsCard
