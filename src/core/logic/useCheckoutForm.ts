import { useForm, type UseFormReturnType } from "@mantine/form";

export interface CheckoutFormValues {
  //doprava
  date: string;
  address: string;
  city: string;
  zip: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  giftMessage?: string;
  giftRecipient?: string;
  giftColor?: string;

  //platba
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  cardName: string;
}

export const useCheckoutForm = () => {
  return useForm<CheckoutFormValues>({
    initialValues: {
      date: "",
      address: "",
      city: "",
      zip: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      giftMessage: "",
      giftRecipient: "",
      giftColor: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVC: "",
      cardName: "",
    },
    validate: {
      firstName: (v) => (v.trim().length === 0 ? "Jméno je povinné" : null),
      lastName: (v) => (v.trim().length === 0 ? "Příjmení je povinné" : null),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Neplatný e-mail"),
      phone: (v) => (v.trim().length === 0 ? "Telefon je povinný" : null),
      date: (v) => (!v ? "Datum je povinný" : null),
      address: (v) => (v.trim().length === 0 ? "Adresa je povinná" : null),
      city: (v) => (v.trim().length === 0 ? "Město je povinné" : null),
      zip: (v) => (/^\d{3}\s?\d{2}$/.test(v) ? null : "Neplatné PSČ"),
      cardNumber: (v) => (v.trim().length === 0 ? "Telefon je povinný" : null),
      cardExpiry: (v) =>
        v.trim().length === 0 ? "Datum expirace je povinné" : null,
      cardCVC: (v) => (v.trim().length === 0 ? "CVC je povinné" : null),
      cardName: (v) =>
        v.trim().length === 0 ? "Jméno na kartě je povinné" : null,
    },
  });
};

export interface CheckoutFormProps {
  form: UseFormReturnType<CheckoutFormValues>;
}
