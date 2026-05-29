// import {FC, memo, useCallback, useMemo, useState} from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm: FC = memo(() => {
//   const defaultData = useMemo(
//     () => ({
//       name: '',
//       email: '',
//       message: '',
//     }),
//     [],
//   );

//   const [data, setData] = useState<FormData>(defaultData);

//   const onChange = useCallback(
//     <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
//       const {name, value} = event.target;

//       const fieldData: Partial<FormData> = {[name]: value};

//       setData({...data, ...fieldData});
//     },
//     [data],
//   );



// const handleSendMessage = useCallback(
//     async (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();

//       const accessKey = "d0c1f120-71da-4faf-a6bf-5e277907f8be"; 

//       try {
//         // تحويل البيانات البرمجية إلى صيغة FormData العادية التي يقبلها السيرفر المحلي فوراً
//         const formData = new FormData();
//         formData.append("access_key", accessKey);
//         formData.append("name", data.name);
//         formData.append("email", data.email);
//         formData.append("message", data.message);

//         const response = await fetch("https://web3forms.com", {
//           method: "POST",
//           body: formData // إرسال كـ FormData يحل مشكلة الحظر على الـ Localhost
//         });

//         const result = await response.json();
        
//         if (result.success) {
//           alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");
//           setData(() => ({name: "", email: "", message: ""}));
//         } else {
//           // طباعة رسالة الخطأ القادمة من السيرفر بالتفصيل في الـ Console لمعرفتها
//           console.log("Server Error Detail:", result);
//           alert(`خطأ من السيرفر: ${result.message || 'يرجى المحاولة لاحقاً'}`);
//         }
//       } catch (error) {
//         console.error("Error sending mail:", error);
//         alert("فشل الاتصال بالسيرفر، تأكد من اتصال جهازك بالإنترنت.");
//       }
//     },
//     [data],
//   );

  


//   const inputClasses =
//     'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

//   return (
//     <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
//       <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
//       <input
//         autoComplete="email"
//         className={inputClasses}
//         name="email"
//         onChange={onChange}
//         placeholder="Email"
//         required
//         type="email"
//       />
//       <textarea
//         className={inputClasses}
//         maxLength={250}
//         name="message"
//         onChange={onChange}
//         placeholder="Message"
//         required
//         rows={6}
//       />
//       <button
//         aria-label="Submit contact form"
//         className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
//         type="submit">
//         Send Message
//       </button>
//     </form>
//   );
// });

// ContactForm.displayName = 'ContactForm';
// export default ContactForm;



import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormDataType {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormDataType>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(
      event: React.ChangeEvent<T>,
    ): void => {
      const {name, value} = event.target;

      setData(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const formData = new FormData();

        formData.append(
          'access_key',
          'd0c1f120-71da-4faf-a6bf-5e277907f8be',
        );

        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);
        formData.append('subject', 'New Portfolio Message');

        const response = await fetch(
          'https://api.web3forms.com/submit',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
            },
            body: formData,
          },
        );

        const result = await response.json();

        if (result.success) {
          alert('تم إرسال رسالتك بنجاح ✅');

          setData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          console.log(result);

          alert('حدث خطأ أثناء الإرسال ❌');
        }
      } catch (error) {
        console.error(error);

        alert('فشل الاتصال بالسيرفر ❌');
      }
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />

      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />

      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />

      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;