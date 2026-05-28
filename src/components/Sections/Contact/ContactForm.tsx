import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
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

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

//   const handleSendMessage = useCallback(
//     async (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       /**
//        * This is a good starting point to wire up your form submission logic
//        * */

//  // ضع المفتاح السري الذي وصلك على الإيميل بين القوسين بالأسفل
//       const accessKey = "d0c1f120-71da-4faf-a6bf-5e277907f8be"; 

//       try {
//         const response = await fetch("https://web3forms.com", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             access_key: accessKey,
//             name: data.name,      // اسم المرسل
//             email: data.email,    // إيميل المرسل
//             message: data.message // نص الرسالة
//           }),
//         });

//         const result = await response.json();
//         if (result.success) {
//           alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");
//           // تفريغ الحقول بعد الإرسال بنجاح
// setData({ name: "", email: "", message: "" } as FormData);
//         } else {
//           alert("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.");
//         }
//       } catch (error) {
//         console.error("Error sending mail:", error);
//         alert("فشل الاتصال بالسيرفر، تأكد من إنترنت جهازك.");
//       }

//     },
//     [data],
//   );


const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const accessKey = "d0c1f120-71da-4faf-a6bf-5e277907f8be"; 

      try {
        // تحويل البيانات البرمجية إلى صيغة FormData العادية التي يقبلها السيرفر المحلي فوراً
        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const response = await fetch("https://web3forms.com", {
          method: "POST",
          body: formData // إرسال كـ FormData يحل مشكلة الحظر على الـ Localhost
        });

        const result = await response.json();
        
        if (result.success) {
          alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");
          setData(() => ({name: "", email: "", message: ""}));
        } else {
          // طباعة رسالة الخطأ القادمة من السيرفر بالتفصيل في الـ Console لمعرفتها
          console.log("Server Error Detail:", result);
          alert(`خطأ من السيرفر: ${result.message || 'يرجى المحاولة لاحقاً'}`);
        }
      } catch (error) {
        console.error("Error sending mail:", error);
        alert("فشل الاتصال بالسيرفر، تأكد من اتصال جهازك بالإنترنت.");
      }
    },
    [data],
  );

  


  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
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
