import { FC } from "react";
import {
  BodyContainer,
  BtnShow,
  ButtonOptiosList,
  ImgDownIcon,
  InfoItemLeft,
  Listfooter,
  ListItemContainer,
  ListItemText,
  ListItens,
  ListItensIconRight,
  SubContainerInput,
  TextInputContainer,
  TextInputTodo,
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import {
  changeMode,
  changeLanguage,
} from "../../storage/reducers/list/actions";
import { EnHeaderProps } from "./types";
import imgDown from "./../../assets/img/icons8_Down_Arrow_52px.png";
import { routesEnum } from "../../types";

const EnBody: FC<EnHeaderProps> = ({
  lang,
  mode,
  changeMode = () => {},
  changeLanguage = () => {},
  defaultFilter,
}) => {
  const { PLACEHOLDER, ACTIVE, ALL, COMPLETED, CLEAN } = lang;

  const getActive = (value: String) => lang[defaultFilter] === value;
  const changeRoute = (value: routesEnum) => {
    window.location.href = `/${value}`;
  };

  return (
    <>
      <BodyContainer>
        <TextInputContainer>
          <BtnShow>
            <ImgDownIcon src={imgDown} />
          </BtnShow>
          <SubContainerInput>
            <TextInputTodo placeholder={PLACEHOLDER}></TextInputTodo>
          </SubContainerInput>
        </TextInputContainer>

        <ListItemContainer>
          <ListItens>
            <ListItensIconRight />
            <ListItemText> Teste</ListItemText>
          </ListItens>

          <InfoItemLeft> 1 Item Left</InfoItemLeft>
          <Listfooter>
            <ButtonOptiosList
              onClick={() => {
                changeRoute(routesEnum.ALL);
              }}
              active={getActive(ALL)}
            >
              {ALL}
            </ButtonOptiosList>

            <ButtonOptiosList
              onClick={() => {
                changeRoute(routesEnum.ACTIVE);
              }}
              active={getActive(ACTIVE)}
            >
              {ACTIVE}
            </ButtonOptiosList>

            <ButtonOptiosList
              onClick={() => {
                changeRoute(routesEnum.COMPLETED);
              }}
              active={getActive(COMPLETED)}
            >
              {COMPLETED}
            </ButtonOptiosList>

            <ButtonOptiosList
              active={false}
              completed={true}
              onClick={() => {}}
            >
              {CLEAN}
            </ButtonOptiosList>
          </Listfooter>
        </ListItemContainer>
      </BodyContainer>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  lang: store.listState.lang,
  mode: store.listState.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ changeMode, changeLanguage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnBody);
