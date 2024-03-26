export interface ParamFormProps extends React.PropsWithChildren {
  onClick: React.MouseEventHandler;
}

export function ParamForm({ children, onClick }: ParamFormProps) {
  return (
    <form>
      <fieldset className="grid grid-cols-2 gap-x-6 border-b">
        {children}
      </fieldset>
      <div className="mt-6 flex justify-end">
        <button
          className="px-3.5 py-1 border rounded-md"
          type="button"
          onClick={onClick}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
}
