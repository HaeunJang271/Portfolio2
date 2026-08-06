import type { ContactPayload } from "@/types";

export type ContactFormErrors = Partial<Record<keyof ContactPayload, string>>;

/**
 * Validates consultation form values before submission.
 */
export function validateContactForm(values: ContactPayload): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const phone = values.phone.replace(/\s/g, "");
  const message = values.message.trim();

  if (!name) {
    errors.name = "이름을 입력해 주세요.";
  }

  if (!phone) {
    errors.phone = "연락처를 입력해 주세요.";
  } else if (!/^[0-9+\-]{8,20}$/.test(phone)) {
    errors.phone = "올바른 연락처 형식이 아닙니다.";
  }

  if (!message) {
    errors.message = "문의 내용을 입력해 주세요.";
  } else if (message.length < 10) {
    errors.message = "문의 내용을 조금 더 자세히 적어 주세요.";
  }

  return errors;
}

/**
 * Returns whether a contact form error map contains no field errors.
 */
export function isContactFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
