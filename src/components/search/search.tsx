import { useInput } from "../../hooks/useInput";
import { ChangeEvent, FormEvent } from "react";
import search from "../../images/search.svg";
import { useDispatch } from "../../hooks/hooks";
import style from "./search.module.sass";
import { SetSearchValue } from "../../servicies/redux/actions/setSearchValue";
export const Search = () => {
  const searchInput = useInput("");
  const dispatch = useDispatch();
  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(SetSearchValue(searchInput.value));
  };
  const onHandleClickDelete = () => {
    dispatch(SetSearchValue(""));
    searchInput.onChange({
      target: { value: "" },
    } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={style.searchForm}>
        <input
          type={"text"}
          value={searchInput.value}
          onChange={searchInput.onChange}
          placeholder={"Поиск задачи"}
        />
        <div className={style.delete} onClick={onHandleClickDelete}>
          ╳
        </div>
        <button type={"submit"}>
          <img src={search} alt={"search"} />
        </button>
      </form>
    </>
  );
};
