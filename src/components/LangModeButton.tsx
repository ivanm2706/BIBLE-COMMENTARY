import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setLang } from "../features/mode/modeSlice";

export default function LangModeButton () {
  const lang = useAppSelector(state => state.mode.lang);
  const dispatch = useAppDispatch();

    const toggleLang = (val: 'ru' | 'en') => {
    dispatch(setLang(val));
  };

  return (
    <ToggleButtonGroup type="radio" name="lang" value={lang} onChange={toggleLang}>
      <ToggleButton id="lang-ru" variant="outline-secondary" value="ru" size="sm">
        ru
      </ToggleButton>
      <ToggleButton id="lang-en" variant="outline-secondary" value="en" size="sm">
        en
      </ToggleButton>
    </ToggleButtonGroup>
  )
};