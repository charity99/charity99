import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings" dir="rtl">
      <div className="settings__wrapper">
        <h2 className="settings__title">الأعدادات</h2>

        <div className="details__form">
          <h2 className="profile__title">الملف الشخصي</h2>
          <p className="profile__desc">قم بتحديث صورتك وبياناتك الشخصية هنا</p>
          <form>
            <div className="form__group">
              <div>
                <label>مكان السكن</label>
                <input type="text" placeholder="الزرقاء" />
              </div>

              <div>
                <label>الشارع</label>
                <input type="text" placeholder="شارع ال60 " />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>البريد الألكتروني</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div>
                <label>رقم الهاتف</label>
                <input type="number" placeholder="+962 79*******" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>تاريخ الولادة</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>الجنس</label>
                <input type="text" placeholder="ذكر" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>الصورة الشخصية</label>
                <p className="profile-img__desc">
                  سوف تظهر هذه الصورة بملفك الشخصي
                </p>
                <input type="file" placeholder="اختر الملف" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">حذف</button>
                <button className="update__btn">تعديل</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
