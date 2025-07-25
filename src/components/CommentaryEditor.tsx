import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Commentary } from '../types/bible';

type Props = {
  commentary: Commentary;
  onSave: (updated: Commentary) => void;
  onCancel: () => void;
};

const CommentaryEditor: React.FC<Props> = ({ commentary, onSave, onCancel }) => {
  return (
    <Formik
      initialValues={commentary}
      onSubmit={onSave}
    >
      {() => (
        <Form className="mb-4">
          <h5>Редактировать комментарий</h5>
          <label>Up Context (RU)</label>
          <Field name="upContext.ru" className="form-control mb-2" />
          <label>Down Context (RU)</label>
          <Field name="downContext.ru" className="form-control mb-2" />
          <label>Block ID</label>
          <Field name="block" className="form-control mb-2" />
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Сохранить</button>
            <button type="button" onClick={onCancel} className="btn btn-secondary">Отмена</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CommentaryEditor;
