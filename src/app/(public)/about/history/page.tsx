"use client";
import Image from "next/image";
import Hospital from '../../../../../public/assets/hospital.jpeg'
import AboutNavPage from "../../Components/AboutNav";
export default function HistoryPage() {
  return (
    <>
      <div className="flex flex-wrap flex-col items-center  justify-center bg-gradient-to-t from-blue-300  to-sky-600 ">
        <div className="m-4">
          <AboutNavPage />
        </div>
        <section>
            <h1 className="text-4xl text-white text-center">
                How Sahid Smriti Formed
            </h1>
            <div className=" flex items-center justify-center mx-5 md:mx-0 bg-white p-4 mb-10 mt-10 rounded-lg flex-wrap">
              <Image src={Hospital} alt="hospital" className="  md:h-[700px] md:w-[1200px]"/>
          <p className="my-10 text-center md:text-justify md:mx-5 text-xl  ">
          यस क्षेत्रका जनताहरुलाई स्वास्थ्य सेवा पहुँचमा ल्याउनका लागि सहिद स्मृति सामुदायिक अस्पताल विकास केन्द्रको मिति २०६४ सालमा स्थापना भई जिल्ला प्रशासन कार्यालयमा दर्ता (दर्ता नं. १२०८) गरेका थियो । मिति २०६६ साल मंसिर ९ गते देखि १७ गते सम्म नवाह ज्ञान महायज्ञ संचालन गरि आर्थिक श्रोतको व्यवस्थापन गरिएको थियो । मिति २०६७ साल वैशाख ११ गते बाट यस अस्पतालले निरन्तर स्वास्थ्य सेवा प्रदान गर्दै आइरहेको छ । माहायज्ञमा रु १०००० अक्षरुपी दश हजार भन्दा माथि दान गर्ने दाताहरुलाई यस संस्थाको आजीवन सदस्य प्रदान गर्ने निर्णय अनुसार हाल सम्म १३२५ जना आजीवन सदस्यहरु रहनु भएको छ । यस संस्थाले आन्तरिक राजस्व कार्यालयबाट आयकर छुट हुने संस्थामा दर्ता गरी पान नं. ३०४२८४५२४ प्राप्त गरेको छ । स्वास्थ्य सेवा विभागबाट पूर्वाधार स्वीकृत लिई अस्पताल सेवा सुरु गरेको र मिति २०७० साल जेठ २७ गते पश्चिमाञ्चल क्षेत्रिय स्वास्थ्य निर्देशनालय पोखरा बाट १५ सैया अस्पताल संचालन स्वीकृत प्राप्त गरेको छ । ४ सैयाको आस्मीक कक्ष, २ सैया असाध्य तथा विपन्न कक्ष लगायत २५ सैया सम्मको सेवाहरु प्रदान गर्दै आइरहेको छ । यो संस्था नाफा रहित सामुदायिक संस्था हो ।
          </p>
            </div>
        </section>
      </div>
    </>
  );
}
