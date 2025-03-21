import { useNavigate, useActionData } from "@remix-run/react";
import React from "react";
import Input from "~/Component/Utils/Input";
import { Spinner } from "~/Component/Utils/Loader";
import { ActionFunction, json } from "@remix-run/node";
export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  const response = await fetch("http://localhost:5174/api/create-link", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (!response.ok) {
    console.log();
    return json(
      { error: "Failed to create link" },
      { status: response.status }
    );
  } else {
    return json(data);
  }
};

export default function CreateLink() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const actionData = useActionData();
  console.log(actionData)
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <h3 className="text-[30px]">Finale meet</h3>
      <div className="m-auto self-center place-self-center justify-self-center px-4 py-4 rounded-md shadow-md shadow-slate-600 sm:w-[80%] md:w-[40%] bg-gray-700 md:h-[50%] sm:h-[70%]">
        <form action="" method="post">
          <Input
            label={"Lecturer name :"}
            placeholder={"Prof. Jamal"}
            name={"lecturerName"}
          />
          <Input
            label={"Course Code :"}
            placeholder={"EDT422"}
            name={"courseCode"}
          />
          <Input
            label={"Course name :"}
            placeholder={"Automatter"}
            name={"courseName"}
          />
          <Input label={"Time :"} placeholder={"Prof. Jamal"} name={"time"} />
          <button
            type="submit"
            className="outline-none w-full py-3 mt-5 space-x-6 bg-green-600 flex items-center justify-center rounded-md"
          >
            <span>Create lecture Link</span>
            {loading && <Spinner />}
          </button>
        </form>
      </div>
    </div>
  );
}
