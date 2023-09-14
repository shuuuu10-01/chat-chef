import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auth } from 'src/plugins/firebase';

import styles from './styles.module.scss';

type FormData = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = (data) => {
    return new Promise((resolve) => {
      signInWithEmailAndPassword(auth, data.email, data.password).then((result) => {
        console.log(result);
        resolve(() => {});
      });
    });
  };

  return (
    <Flex
      height={'100dvh'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}>
      <Heading mb={8}>Chat Chef</Heading>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <FormControl mb={4} isInvalid={!!errors.email} textAlign={'start'}>
          <FormLabel mb={1} htmlFor="email">
            メールアドレス
          </FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'メールアドレスを入力してください' })}
          />
          <FormErrorMessage mt={1}>{!!errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl mb={6} isInvalid={!!errors.password}>
          <FormLabel mb={1}>パスワード</FormLabel>
          <Input
            id="password"
            type="password"
            {...register('password', { required: 'パスワードを入力してください' })}
          />
          <FormErrorMessage mt={1}>{!!errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
          ログイン
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
