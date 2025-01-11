import React from "react"

import type {
  CarrierCode,
  CountryCallingCode,
  CountryCode,
  E164Number,
  NationalNumber,
  NumberType
} from "libphonenumber-js"

import { cn } from "@ap2p/utils"
import parsePhoneNumberFromString, { AsYouType } from "libphonenumber-js"

import countries from "../data/countries.json"
import { useStateHistory } from "../hooks"
import { Input } from "./input"

export interface PhoneData {
  phoneNumber?: E164Number
  countryCode?: CountryCode
  countryCallingCode?: CountryCallingCode
  carrierCode?: CarrierCode
  nationalNumber?: NationalNumber
  internationalNumber?: string
  possibleCountries?: string
  isValid?: boolean
  isPossible?: boolean
  uri?: string
  type?: NumberType
}

interface PhoneInputProps extends React.ComponentPropsWithoutRef<"input"> {
  value?: string
  defaultCountry?: CountryCode
}

export function getPhoneData(phone: string): PhoneData {
  const asYouType = new AsYouType()
  asYouType.input(phone)
  const number = asYouType.getNumber()

  return {
    phoneNumber: number?.number,
    countryCode: number?.country,
    countryCallingCode: number?.countryCallingCode,
    carrierCode: number?.carrierCode,
    nationalNumber: number?.nationalNumber,
    internationalNumber: number?.formatInternational(),
    possibleCountries: number?.getPossibleCountries().join(", "),
    isValid: number?.isValid(),
    isPossible: number?.isPossible(),
    uri: number?.getURI(),
    type: number?.getType()
  }
}

const PhoneInput = React.forwardRef<HTMLInputElement | null, PhoneInputProps>(
  (
    {
      value: valueProp,
      defaultCountry = "PL",
      className,
      id,
      required = false,
      ...rest
    },
    ref
  ) => {
    const asYouType = new AsYouType()

    const [value, handlers, history] = useStateHistory(valueProp)

    if (value && value.length > 0) {
      defaultCountry =
        parsePhoneNumberFromString(value)?.getPossibleCountries()[0] ??
        defaultCountry
    }

    // const [openCommand, setOpenCommand] = React.useState(false);
    const [countryCode, setCountryCode] =
      React.useState<CountryCode>(defaultCountry)

    const selectedCountry = countries.find(
      (country) => country.iso2 === countryCode
    )

    const initializeDefaultValue = () => {
      if (value) {
        return value
      }

      // return `+${selectedCountry?.phone_code}`;
      return ""
    }

    const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
      asYouType.reset()

      let value = event.currentTarget.value
      if (!value.startsWith("+")) {
        value = `+${value}`
      }

      const formattedValue = asYouType.input(value)
      const number = asYouType.getNumber()
      setCountryCode(number?.country ?? defaultCountry)
      event.currentTarget.value = formattedValue
      handlers.set(formattedValue)
    }

    const handleOnPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault()
      asYouType.reset()

      const clipboardData = event.clipboardData

      if (clipboardData) {
        const pastedData = clipboardData.getData("text/plain")
        const formattedValue = asYouType.input(pastedData)
        // const number = asYouType.getNumber();
        // setCountryCode(number?.country || defaultCountry);
        event.currentTarget.value = formattedValue
        handlers.set(formattedValue)
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        (ref as React.RefObject<HTMLInputElement>).current &&
        (event.metaKey || event.ctrlKey) &&
        event.key === "z"
      ) {
        handlers.back()
        if (
          (ref as React.RefObject<HTMLInputElement>).current &&
          history.current > 0 &&
          history.history[history.current - 1] !== undefined
        ) {
          event.preventDefault()
          ;(ref as React.RefObject<HTMLInputElement>).current!.value =
            history.history[history.current - 1] ?? ""
        }
      }
    }

    return (
      <div className={cn("flex gap-2", className)}>
        <Input
          ref={ref}
          type='text'
          pattern='^(\+)?[0-9\s]*$'
          name='phone'
          maxLength={20}
          id={id}
          placeholder={`+${selectedCountry?.phone_code}`}
          defaultValue={initializeDefaultValue()}
          onInput={handleOnInput}
          onPaste={handleOnPaste}
          onKeyDown={handleKeyDown}
          required={required}
          aria-required={required}
          {...rest}
        />
      </div>
    )
  }
)

PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
