import React, { FC, useEffect, useState } from "react";
import {
  BodyContainer,
  BtnShow,
  ButtomDeleteItem,
  ButtonOptiosList,
  ImgDownIcon,
  InfoItemLeft,
  InputEdit,
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
  addListItem,
  changeMode,
  changeLanguage,
  updateListItem,
} from "../../storage/reducers/list/actions";
import { EnHeaderProps } from "./types";
import imgDown from "./../../assets/img/icons8_Down_Arrow_52px.png";
import { routesEnum } from "../../types";
import { changeRoute, saveList } from "./util";
import { typeOfFilters } from "../../views/home/types";
import { toast } from "react-toastify";

const EnBody: FC<EnHeaderProps> = ({
  lang,
  list,
  defaultFilter,
  addListItem,
  updateListItem,
}) => {
  const {
    PLACEHOLDER,
    ACTIVE,
    ALL,
    COMPLETED,
    CLEAN,
    EDIT_SUCESS,
    ADDED_SUCESS,
    EMPTY_VALUE,
  } = lang;
  const inputRef = React.createRef<HTMLInputElement>();
  const inputEditRef = React.createRef<HTMLInputElement>();
  const [activeAll, setActiveAll] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const getActive = (value: String) => lang[defaultFilter] === value;
  const countLeftItem = () => list.filter(({ isDone }) => !isDone).length;
  const countActiveItem = () => list.filter(({ isDone }) => isDone).length;
  const clearCompleted = () => {
    const listNow = list.filter(({ isDone }) => isDone === false);
    updateListItem(listNow);
    saveList(listNow);
  };
  const updateItem = (id: string) => {
    updateListItem(
      list.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e))
    );
  };

  const deleteItem = (id: string) => {
    const newList = list.filter((e) => e.id !== id);
    updateListItem(newList);
    saveList(newList);
  };

  const updateById = (value: string) => {
    if (value) {
      updateListItem(
        list.map((e) => (e.id === selectedId ? { ...e, title: value } : e))
      );
      setSelectedId("");
      toast.success(EDIT_SUCESS);
    } else {
      toast.warning(EMPTY_VALUE);
    }
  };

  useEffect(() => {
    if (list.length > 0) saveList(list);
  }, [list]);

  return (
    <>
      <BodyContainer>
        <TextInputContainer key={1}>
          <BtnShow
            key={34}
            onClick={() => {
              setActiveAll(!activeAll);
              updateListItem(list.map((e) => ({ ...e, isDone: !activeAll })));
            }}
          >
            <ImgDownIcon key={35} src={imgDown} />
          </BtnShow>

          <SubContainerInput key={2}>
            <TextInputTodo
              ref={inputRef}
              placeholder={PLACEHOLDER}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  if (inputRef.current?.value) {
                    addListItem([
                      {
                        title: inputRef.current?.value?.toString() || "",
                        id: Date.now().toString(),
                        isDone: false,
                      },
                    ]);
                    toast.success(ADDED_SUCESS);
                    if (inputRef.current) inputRef.current.value = "";
                  } else {
                    toast.warning(EMPTY_VALUE);
                  }
                }
              }}
            ></TextInputTodo>
          </SubContainerInput>
        </TextInputContainer>

        <ListItemContainer key={567}>
          {list
            .filter((e) => {
              switch (defaultFilter) {
                case typeOfFilters.ACTIVE:
                  return !e.isDone;
                case typeOfFilters.COMPLETED:
                  return e.isDone;
                default:
                  return e;
              }
            })
            .map(({ isDone, title, id }, i) => (
              <ListItens key={i}>
                <ListItensIconRight
                  onClick={() => {
                    updateItem(id);
                  }}
                  key={i + 2}
                  isDone={isDone}
                />

                <ListItemText
                  onDoubleClick={() => {
                    if (!selectedId) {
                      setSelectedId(id);
                    } else setSelectedId("");
                  }}
                  key={i + 1}
                  isDone={isDone}
                >
                  {selectedId === id ? (
                    <>
                      <InputEdit
                        ref={inputEditRef}
                        defaultValue={title}
                        onKeyUp={(e) => {
                          if (e.code === "Enter") {
                            updateById(inputEditRef.current?.value || "");
                          }
                        }}
                      />
                    </>
                  ) : (
                    title
                  )}
                </ListItemText>

                <ButtomDeleteItem
                  onClick={() => {
                    deleteItem(id);
                  }}
                >
                  X
                </ButtomDeleteItem>
              </ListItens>
            ))}

          <InfoItemLeft>{countLeftItem()} Item Left</InfoItemLeft>

          <Listfooter>
            <ButtonOptiosList
              key={1}
              onClick={() => {
                changeRoute(routesEnum.ALL);
              }}
              active={getActive(ALL)}
            >
              {ALL}
            </ButtonOptiosList>

            <ButtonOptiosList
              key={2}
              onClick={() => {
                changeRoute(routesEnum.ACTIVE);
              }}
              active={getActive(ACTIVE)}
            >
              {ACTIVE}
            </ButtonOptiosList>

            <ButtonOptiosList
              key={3}
              onClick={() => {
                changeRoute(routesEnum.COMPLETED);
              }}
              active={getActive(COMPLETED)}
            >
              {COMPLETED}
            </ButtonOptiosList>

            {countActiveItem() > 0 && (
              <ButtonOptiosList
                key={4}
                active={false}
                completed={true}
                onClick={() => {
                  clearCompleted();
                }}
              >
                {CLEAN}
              </ButtonOptiosList>
            )}
          </Listfooter>
        </ListItemContainer>
      </BodyContainer>
    </>
  );
};

const mapStateToProps = (store: any) => ({
  list: store.listState.list,
  lang: store.listState.lang,
  mode: store.listState.mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { changeMode, updateListItem, addListItem, changeLanguage },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EnBody);
