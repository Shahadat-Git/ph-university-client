import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const [login, { error }] = useLoginMutation();
  // console.log("data =>", data);
  console.log("error =>", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   if (user) {
    //     toast.success("Logged In", { id: toastId, duration: 2000 });
    //     navigate(`/${user?.role}/dashboard`, { replace: true });
    //     dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type={"id"} name={"id"} label={"ID : "} />
      </div>
      <div>
        <PHInput type={"password"} name={"password"} label={"Password : "} />
      </div>
      <Button htmlType="submit"> Login</Button>
    </PHForm>
  );
};

export default Login;
