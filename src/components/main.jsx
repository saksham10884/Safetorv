import React from "react"
import { useRef, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const ref = useRef()
    const inputref = useRef(null)
    const [form, setform] = useState({ site: "", username: "", password: "", id: "" })
    const [passwordlist, setpasswordlist] = useState([])
    const [inputtype, setinputtype]=useState("password")
    
    useEffect(() => {
        let pass = localStorage.getItem("passwords")
        if (pass) {
            setpasswordlist(JSON.parse(pass))
        }
    }, [])

    const showpassword = () => {
        if (ref.current.src.includes("Safetorv/visible.png")) {
            ref.current.src = "Safetorv/close-eye.png"
            setinputtype("password")
        }
        else {
            ref.current.src = 'Safetorv/visible.png'
            setinputtype("text")
        }
    }

    const save = () => {
        if (form.site == "" || form.username == "" || form.password == "") {
            alert("Please fill details")
        }
        else {
            setpasswordlist([...passwordlist, form])
            localStorage.setItem("passwords", JSON.stringify([...passwordlist, form]))
            setform({ site: "", username: "", password: "", id: "" })
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value, id: uuidv4() })
    }

    const copy = (text) => {
        alert("copied to clipboard")
        navigator.clipboard.writeText(text)
    }

    const delpass = (e) => {
        let c = confirm("Do yo want to delete this password")
        if (c) {
            setpasswordlist(passwordlist.filter(item => { return item.id != e }))
            localStorage.setItem("passwords", JSON.stringify(passwordlist.filter(item => { return item.id != e })))
        }
    }

    const editpass = (e) => {
        let pass = passwordlist.filter(item => {
            return item.id == e
        })
        form.site = pass[0].site
        form.username = pass[0].username
        form.password = pass[0].password
        setpasswordlist(passwordlist.filter(item => { return item.id != e }))
    }
    return (
        <div className="justify-items-center px-2">
            <div className="upperbody w-1/2 flex flex-col items-center">
                <img src="Safetorv/logo/cyber-crime.png" className="w-14 justify-self-center topimg" alt="" />
                <h1 className="text-white mb-5 text-center font-bold">Your own password manager</h1>
                <input value={form.site} className=" rounded-full w-full mb-3 block px-3 p-1" placeholder="Enter Website URL" type="text" name="site" onChange={handleChange} />
                <div className="flex md:flex-row flex-col gap-3 w-full relative">
                    <input value={form.username} className=" rounded-full w-full md:w-1/2 block px-3 p-1" placeholder="Enter username" type="text" name="username" onChange={handleChange} />
                    <input ref={inputref} value={form.password} className="rounded-full w-full md:w-1/2 block px-3 pr-10 p-1" placeholder="Enter password" type={inputtype} name="password" onChange={handleChange} />
                    <img ref={ref} className="w-8 right-2 bottom-0  cursor-pointer absolute" onClick={showpassword} src="Safetorv/close-eye.png" alt="" />
                </div>
                <button className="p-2 rounded-md mt-5 text-white bg-indigo-900 w-fit hover:bg-indigo-700" onClick={save}>Save Password</button>
            </div>
            <div className="passwords mt-8 w-4/5 ">
                <h2 className="text-white text-lg  py-2">&lt; Your Passwords &gt;</h2>
                {passwordlist.length === 0 ? <div className="text-white">No password found</div> :
                    <div className="tablecont">

                        <table className="table-auto overflow-hidden rounded-md w-full">
                            <thead className="bg-indigo-900 text-white">
                                <tr className="p-2">
                                    <th className="p-2">Website</th>
                                    <th className="p-2">Username</th>
                                    <th className="p-2">Password</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="add bg-green-200">
                                {passwordlist.map((item, index) => {
                                    return (<tr key={index}>
                                        <td className="text-center text-sm p-1 border-white border-2 w-2/5"><a className="hover:underline" href={item.site} target="_blank">{item.site}</a></td>
                                        <td className="text-center text-sm hover:underline cursor-pointer border-white border-2 w-1/5" onClick={() => copy(item.username)} >{item.username}</td>
                                        <td className="text-center text-sm hover:underline cursor-pointer border-white border-2 w-1/5" onClick={() => copy(item.password)} >{item.password}</td>
                                        <td className="text-center hover:underline cursor-pointer border-white border-2 w-1/5">
                                            <div className="flex gap-3 w-full justify-center">
                                                <div onClick={() => editpass(item.id)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/exymduqj.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        state="hover-line"
                                                        colors="primary:#121331,secondary:#7166ee"
                                                        style={{ "width": "1.5rem" }}>
                                                    </lord-icon>
                                                </div>
                                                <div onClick={() => delpass(item.id)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:#7166ee"
                                                        style={{ "width": "1.5rem" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            <div className="h-24 w-full mt-6"></div>
        </div>
    )
}

export default Main