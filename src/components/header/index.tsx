import { FC } from "react";
import {
  ButtomMode,
  HeaderConteiner,
  HeaderModeContainer,
  SelectContainer,
  SubInfoView,
  TitleView,
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import {
  changeMode,
  changeLanguage,
} from "../../storage/reducers/list/actions";
import { EnHeaderProps } from "./types";
import { languagesPack } from "../../language";

const EnHeader: FC<EnHeaderProps> = ({
  lang,
  mode,
  changeMode = () => {},
  changeLanguage = () => {},
  defaultFilter,
}) => {
  const { DARK, LIGHT, LIST } = lang;

  return (
    <>
      <HeaderConteiner mode={mode}>
        <HeaderModeContainer>
          <ButtomMode
            mode={mode}
            active={mode}
            onClick={() => {
              changeMode(true);
            }}
          >
            <label>{LIGHT}</label>
          </ButtomMode>

          <ButtomMode
            mode={mode}
            active={!mode}
            onClick={() => {
              changeMode(false);
            }}
          >
            <label>{DARK}</label>
          </ButtomMode>
        </HeaderModeContainer>

        <TitleView>{lang[defaultFilter]}</TitleView>
        <SubInfoView>EnContact {LIST}@2021</SubInfoView>

        <SelectContainer mode={mode}>
          <select
            defaultValue="pt"
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
          >
            {languagesPack.map(({ label, value }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </SelectContainer>
      </HeaderConteiner>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  lang: store.listState.lang,
  mode: store.listState.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ changeMode, changeLanguage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnHeader);
