import type { IntlFormatters } from "react-intl";
import { useIntl } from "umi";


export const useTranslate = () => {
  const { formatMessage } = useIntl();

  const tr = (p: IntlFormatters["formatMessage"]) => {
    formatMessage({}, {})

  }

  return {}
}
