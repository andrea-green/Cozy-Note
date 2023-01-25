"""notes migration


Revision ID: 23d1853334d8
Revises:
Create Date: 2023-01-25 16:58:15.291349

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23d1853334d8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('notes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.Column('notebook_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('content', sa.String(length=50000), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['notebook_d'], ),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('notes')
