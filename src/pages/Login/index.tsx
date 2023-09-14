import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl pb-9">Chat Chef</h1>
      <form className="w-4/5 mx-auto text-center" onSubmit={handleSubmit(submit)}>
        <div className="my-4 text-left">
          <label htmlFor="email" className="mb-1 text-sm block text-gray-800">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 focus:outline-gray-500 rounded w-full h-8 p-3 text-sm"
            {...register('email', { required: true })}
          />
        </div>
        <div className="my-4  text-left">
          <label htmlFor="password" className="mb-1 text-sm block text-gray-800">
            パスワード
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 focus:outline-gray-500 rounded w-full h-8 p-3 text-sm"
            {...register('password', { required: true })}
          />
        </div>
        <button className="mt-4 px-6 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white border-gray-700 mx-1">
          ログイン
        </button>
      </form>
    </div>
  );
};

export default Login;
