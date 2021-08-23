import { FC } from "react";
import {
  ButtomMode,
  HeaderConteiner,
  HeaderModeContainer,
  SubInfoView,
  TitleView,
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import { changeMode } from "../../storage/reducers/list/actions";
import { EnHeaderProps } from "./types";

const EnHeader: FC<EnHeaderProps> = ({ mode, changeMode = () => {} }) => {
  return (
    <>
      <HeaderConteiner mode={mode}>
        <HeaderModeContainer>
          <ButtomMode
            active={mode}
            onClick={() => {
              changeMode(true);
            }}
          >
            <label>Light</label>
          </ButtomMode>

          <ButtomMode
            active={!mode}
            onClick={() => {
              changeMode(false);
            }}
          >
            <label>Dark</label>
          </ButtomMode>
        </HeaderModeContainer>

        <TitleView>Todos</TitleView>
        <SubInfoView>EnContact List@2021</SubInfoView>
      </HeaderConteiner>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  mode: store.listState.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ changeMode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnHeader);
